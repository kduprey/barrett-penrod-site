import type { Method } from "axios";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { ZodError } from "zod";

// Shape of the response when an error is thrown
export interface ErrorResponse {
	error: {
		message: string | object;
		err?: unknown; // Sent for unhandled errors reulting in 500
	};
	status?: number; // Sent for unhandled errors reulting in 500
}

type ApiMethodHandlers = {
	[key in Uppercase<Method>]?: NextApiHandler;
};

export const apiHandler =
	(handler: ApiMethodHandlers) =>
	async (req: NextApiRequest, res: NextApiResponse<ErrorResponse>) => {
		try {
			const method = req.method
				? (req.method.toUpperCase() as keyof ApiMethodHandlers)
				: undefined;

			// check if handler supports current HTTP method
			if (!method)
				throw new createHttpError.MethodNotAllowed(
					`No method specified on path ${req.url || ""}!`
				);

			const methodHandler = handler[method];
			if (!methodHandler)
				throw new createHttpError.MethodNotAllowed(
					`Method ${req.method || ""} Not Allowed on path ${
						req.url || ""
					}!`
				);

			// call method handler
			await methodHandler(req, res);
		} catch (err) {
			// global error handler
			errorHandler(err, res);
		}
	};

const errorHandler = (
	err: unknown,
	res: NextApiResponse<ErrorResponse>
): void => {
	// Errors with statusCode >= 500 are should not be exposed
	if (createHttpError.isHttpError(err) && err.expose) {
		// Handle all errors thrown by http-errors module
		res.status(err.statusCode).json({ error: { message: err.message } });
		return;
	} else if (err instanceof ZodError) {
		// Handle zod validation errors
		res.status(400).json({
			error: {
				message: err.errors.map((e) => ({
					message: e.message,
					field: e.path,
				})),
			},
		});
		return;
	}
	// default to 500 server error
	console.error(err);
	res.status(500).json({
		error: { message: "Internal Server Error", err },
		status: createHttpError.isHttpError(err) ? err.statusCode : 500,
	});
};

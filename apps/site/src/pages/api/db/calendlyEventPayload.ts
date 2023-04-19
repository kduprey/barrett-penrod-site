import { Prisma } from "@prisma/client";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import apiHandler from "utils/api";
import { validateRequest } from "utils/yup";
import * as yup from "yup";
import prisma from "../../../lib/prisma";

// const POSTValidation = new yup.ObjectSchema<Prisma.calendlyInviteePayloadsCreateInput>({
// 	id: yup.string().optional(),
// 	cancel_url: yup.string().required(),

const GETHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const data = validateRequest(
		req.query,
		new yup.ObjectSchema({
			searchString: yup.string().optional(),
		})
	);

	try {
		const result = await GET(data.searchString);
		return res.status(200).json(result);
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			throw new createHttpError.InternalServerError(
				JSON.stringify(error)
			);
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "Error getting clients",
				error: "Unknown error",
			})
		);
	}
};

const GET = async (searchString?: string) => {
	if (searchString) {
		try {
			const result = await prisma.calendlyInviteePayloads.findMany({
				where: {
					OR: [
						{
							email: {
								contains: searchString as string,
							},
						},
						{
							name: {
								contains: searchString as string,
							},
						},
					],
				},
			});

			if (!result) {
				return null;
			}

			return result;
		} catch (error: unknown) {
			console.error(error);
			if (error instanceof Error) throw new Error(JSON.stringify(error));
			throw new Error(
				JSON.stringify({
					message: "Error getting clients",
					error: "Unknown error",
				})
			);
		}
	}

	try {
		const result = await prisma.calendlyInviteePayloads.findMany();

		if (!result) return null;

		return result;
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error) throw new Error(JSON.stringify(error));
		throw new Error(
			JSON.stringify({
				message: "Error getting clients",
				error: "Unknown error",
			})
		);
	}
};

const POSTHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const data = req.body as Prisma.calendlyInviteePayloadsCreateInput | null;
	if (!data) {
		return res.status(400).json({
			err: new Error("Error: Missing client info"),
		});
	}

	try {
		const result = await POST(data);
		if (!result) {
			return res.status(500).json({
				err: new Error("Error: Failed to insert client"),
			});
		}

		return res.status(200).json(result);
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			return res.status(500).json({
				message: "Error: Internal server error",
				error,
			});

		return res.status(500).json({
			message: "Error: Internal server error",
		});
	}
};

const POST = async (data: Prisma.calendlyInviteePayloadsCreateInput) => {
	try {
		const result = await prisma.calendlyInviteePayloads.create({
			data,
		});

		if (!result) throw new Error("Error: Failed to insert client");

		return result;
	} catch (error: unknown) {
		console.error(error);

		if (error instanceof Error) throw new Error(JSON.stringify(error));

		throw new Error(
			JSON.stringify({
				message: "Error getting clients",
				error: "Unknown error",
			})
		);
	}
};

const PUTHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const id = req.query.id;
	const data = req.body as Prisma.calendlyInviteePayloadsUpdateInput | null;

	if (!id)
		throw new createHttpError[400](
			JSON.stringify({
				err: new Error("Error: Missing client id"),
			})
		);

	if (!data)
		throw new createHttpError[400](
			JSON.stringify({
				err: new Error("Error: Missing client info"),
			})
		);

	try {
		const result = await PUT(id as string, data);

		if (!result)
			throw new createHttpError.InternalServerError(
				JSON.stringify({
					err: new Error("Error: Failed to update client"),
				})
			);

		return res.status(200).json(result);
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			throw new createHttpError.InternalServerError(
				JSON.stringify({ message: "Error updating client", error })
			);
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "Error updating client",
				error: "Unknown error",
			})
		);
	}
};

const PUT = async (
	id: string,
	data: Prisma.calendlyInviteePayloadsUpdateInput
) => {
	try {
		const result = await prisma.calendlyInviteePayloads.update({
			where: {
				id,
			},
			data,
		});

		if (!result) throw new Error("Error: Failed to update client");

		return result;
	} catch (error: unknown) {
		console.error(error);

		if (error instanceof Error) throw new Error(JSON.stringify(error));

		throw new Error(
			JSON.stringify({
				message: "Error updating client",
				error: "Unknown error",
			})
		);
	}
};

const DELETEHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const id = req.query.id;
	if (!id)
		throw new createHttpError[400](
			JSON.stringify({
				err: new Error("Error: Missing client id"),
			})
		);

	try {
		const result = await DELETE(id as string);

		if (!result)
			throw new createHttpError.InternalServerError(
				JSON.stringify({
					err: new Error("Error: Could not delete client"),
				})
			);

		return res.status(200).json(result);
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			throw new createHttpError.InternalServerError(
				JSON.stringify({ message: "Error deleting client", error })
			);
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "Error deleting client",
				error: "Unknown error",
			})
		);
	}
};

const DELETE = async (id: string) => {
	try {
		const result = await prisma.calendlyInviteePayloads.delete({
			where: {
				id: id as string,
			},
		});

		if (!result) throw new Error("Error: Could not delete client");

		return result;
	} catch (error: unknown) {
		console.error(error);

		if (error instanceof Error) throw new Error(JSON.stringify(error));

		throw new Error(
			JSON.stringify({
				message: "Error deleting client",
				error: "Unknown error",
			})
		);
	}
};

export default apiHandler({
	GET: GETHandler,
	POST: POSTHandler,
	PUT: PUTHandler,
	DELETE: DELETEHandler,
});

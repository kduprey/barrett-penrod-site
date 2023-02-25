import axios from "axios";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import apiHandler from "utils/api";
import { CalendlyCancel } from "../../../types/types";

const cancelEvent = async (uri: string): Promise<CalendlyCancel> => {
	if (uri === undefined || uri === "") throw new Error("Invalid URI");

	try {
		const { data } = await axios.post<CalendlyCancel>(
			`${uri}/cancellation`,
			{
				reason: "The event was cancelled by the invitee.",
			},
			{
				headers: {
					Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
				},
			}
		);

		return data;
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error) throw error;
		throw new Error("Error cancelling event");
	}
};

export { cancelEvent };

const cancelEventHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const { uri } = req.body;

	if (!uri || uri === "") {
		throw new createHttpError[400]("Invalid URI");
	}

	try {
		const response = await cancelEvent(uri);
		res.status(200).json(response);
	} catch (err) {
		console.error(err);
		throw new createHttpError[500](
			JSON.stringify({
				message: "Error cancelling event",
				error: err,
			})
		);
	}
};

export default apiHandler({
	POST: cancelEventHandler,
});

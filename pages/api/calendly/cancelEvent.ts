import axios, { AxiosResponse } from "axios";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import apiHandler from "utils/api";
import { CalendlyCancel } from "../../../types/types";
import { invalidMethod } from "../../../utils/responseDefaults";

const cancelEvent = async (uri: string): Promise<CalendlyCancel> => {
	if (uri === undefined || uri === "") throw new Error("Invalid URI");

	try {
		const response = await axios.post(`${uri}/cancellation`, {
			headers: {
				Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
			},
			body: {
				reason: "The event was cancelled by the invitee.",
			},
		});

		return response.data;
	} catch (err) {
		console.error(err);
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

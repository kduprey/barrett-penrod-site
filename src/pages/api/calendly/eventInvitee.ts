import axios from "axios";
import createHttpError from "http-errors";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { CalendlyInvitee } from "../../../types/types";
import apiHandler from "../../../utils/api";

const getEventInvitee = async (uri: string): Promise<CalendlyInvitee> => {
	if (uri === undefined || uri === "") throw new Error("Invalid URI");

	try {
		const response = await axios.get<CalendlyInvitee>(uri, {
			headers: {
				Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
			},
		});

		return response.data;
	} catch (err) {
		console.error(err);
		throw new Error("Error getting invitee");
	}
};

export { getEventInvitee };

const eventInviteeHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const { uri } = req.query;
	if (
		!uri ||
		typeof uri !== "string" ||
		uri.length === 0 ||
		uri === "undefined" ||
		uri === typeof Array
	)
		throw new createHttpError[400]("Invalid URI");

	try {
		const inviteeRes = await getEventInvitee(uri);
		res.status(200).json(inviteeRes);
	} catch (err) {
		console.error(err);
		throw new createHttpError[500](
			JSON.stringify({
				message: "Error getting invitee",
				error: err,
			})
		);
	}
};

export default apiHandler({
	GET: eventInviteeHandler,
});

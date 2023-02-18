import axios from "axios";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import apiHandler from "utils/api";
import { CalendlyEvent } from "../../../types/calendlyTypes";

const getEventInfo = async (uri: string): Promise<CalendlyEvent> => {
	if (uri === undefined || uri === "") throw new Error("Invalid URI");

	try {
		const { data } = await axios.get<CalendlyEvent>(uri, {
			headers: {
				Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
			},
		});

		return data;
	} catch (err) {
		console.error(err);
		throw new Error("Error getting event info");
	}
};
export { getEventInfo };

const eventInfoHandler: NextApiHandler = async (
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
		const eventRes = await getEventInfo(uri);
		res.status(200).json(eventRes);
	} catch (err) {
		console.error(err);
		throw new createHttpError[500](
			JSON.stringify({
				message: "Error getting event info",
				error: err,
			})
		);
	}
};

export default apiHandler({
	GET: eventInfoHandler,
});

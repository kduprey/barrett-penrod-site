import { apiHandler, getCalendlyEvent } from "@bpvs/utils";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const eventInfoHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const { uri } = z
		.object({
			uri: z.string(),
		})
		.parse(req.query);
	if (
		!uri ||
		typeof uri !== "string" ||
		uri.length === 0 ||
		uri === "undefined" ||
		uri === typeof Array
	)
		throw new createHttpError[400]("Invalid URI");

	try {
		const eventRes = await getCalendlyEvent(uri);
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

import { apiHandler, cancelCalendlyEvent } from "@bpvs/utils";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const cancelEventHandler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const { uri } = req.body;

	if (!uri || uri === "") {
		throw new createHttpError[400]("Invalid URI");
	}

	try {
		const response = await cancelCalendlyEvent(uri);
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

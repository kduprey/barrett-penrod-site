import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { GetCalendlyEvent } from "../../../types/calendlyTypes";
import { invalidMethod } from "../../../utils/responseDefaults";

const getEventInfo = async (
	uri: string
): Promise<AxiosResponse<GetCalendlyEvent>> => {
	return await axios.get<GetCalendlyEvent>(uri, {
		headers: {
			Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
		},
	});
};
export { getEventInfo };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { uri } = req.body as { uri: string };
	if (!uri || typeof uri !== "string") {
		res.status(400).json({ message: "Missing uri" });
		return;
	}
	invalidMethod("POST", req, res);

	try {
		const eventRes = await getEventInfo(uri);
		res.status(200).json(eventRes.data);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error getting event" });
	}
};

export default handler;

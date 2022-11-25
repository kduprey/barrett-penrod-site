import axios, { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { CalendlyCancel } from "../../../types/types";
import { invalidMethod } from "../../../utils/responseDefaults";

const cancelEvent = async (
	uri: string
): Promise<AxiosResponse<CalendlyCancel>> => {
	return await axios.post(`${uri}/cancellation`, {
		headers: {
			Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
		},
		body: {
			reason: "The event was cancelled by the invitee.",
		},
	});
};

export { cancelEvent };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { uri } = req.body as { uri: string };
	if (!uri || typeof uri !== "string") {
		res.status(400).json({ message: "Missing uri" });
		return;
	}
	invalidMethod("POST", req, res);

	try {
		const eventRes = await cancelEvent(uri);
		res.status(200).json(eventRes.data);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error cancelling event" });
	}
};

export default handler;

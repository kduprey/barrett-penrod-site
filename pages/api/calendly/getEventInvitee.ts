import axios, { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { CalendlyInvitee } from "../../../types/types";
import { invalidMethod } from "../../../utils/responseDefaults";

const getEventInvitee = async (
	uri: string
): Promise<AxiosResponse<CalendlyInvitee>> => {
	return await axios.get<CalendlyInvitee>(uri, {
		headers: {
			Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
		},
	});
};

export { getEventInvitee };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { uri } = req.body as { uri: string };
	if (!uri || typeof uri !== "string")
		res.status(400).json({ message: "Missing uri" });

	invalidMethod("POST", req, res);

	try {
		const inviteeRes = await getEventInvitee(uri);
		res.status(200).json(inviteeRes.data);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error getting invitee" });
	}
};

export default handler;

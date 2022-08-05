import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { CalendlyEventInvitee } from "../../../types";

type Data = {};

const getEventInvitee = async (
	req: NextApiRequest,
	res: NextApiResponse<CalendlyEventInvitee | Data>
) => {
	const { uri } = req.body as { uri: string };

	const inviteeRes = await axios.get(uri, {
		headers: {
			Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
		},
	});

	if (inviteeRes.status !== 200) {
		res.status(500).json(inviteeRes);
	}

	const invitee: CalendlyEventInvitee = inviteeRes.data;
	res.status(200).json(invitee);
};

export default getEventInvitee;

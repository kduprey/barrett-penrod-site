import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { CalendlyEvent } from "../../../types";

type Data = {};

const eventInfo = async (
	req: NextApiRequest,
	res: NextApiResponse<CalendlyEvent | Data>
) => {
	const { uri } = req.body as { uri: string };

	const eventRes = await axios.get(uri, {
		headers: {
			Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
		},
	});
	if (eventRes.status !== 200) {
		res.status(500).json(eventRes);
	}

	const event: CalendlyEvent = eventRes.data;
	res.status(200).json(event);
};

export default eventInfo;

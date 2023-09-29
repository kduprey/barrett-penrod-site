import { trytm } from "@bdsqqq/try";
import type { CalendlyEvent } from "@bpvs/types";
import axios from "axios";

export const getCalendlyEvent = async (uri: string): Promise<CalendlyEvent> => {
	const [res, err] = await trytm(
		axios.get<CalendlyEvent>(uri, {
			headers: {
				Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
			},
		})
	);

	if (err) throw err;

	return res.data;
};

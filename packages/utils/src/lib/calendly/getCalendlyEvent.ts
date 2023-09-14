import type { CalendlyEvent } from "@bpvs/types";
import axios from "axios";

export const getCalendlyEvent = async (uri: string): Promise<CalendlyEvent> => {
	try {
		const { data } = await axios.get<CalendlyEvent>(uri, {
			headers: {
				Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
			},
		});

		return data;
	} catch (err) {
		console.error(err);
		throw new Error("Error getting event info");
	}
};

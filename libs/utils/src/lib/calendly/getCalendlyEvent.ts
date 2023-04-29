import { CalendlyEvent } from "@bpvs/types";
import axios from "axios";

export const getCalendlyEvent = async (uri: string): Promise<CalendlyEvent> => {
	if (uri === undefined || uri === "") throw new Error("Invalid URI");

	try {
		const { data } = await axios.get<CalendlyEvent>(uri, {
			headers: {
				Authorization: `Bearer ${
					process.env["CALENDLY_API_KEY"] as string
				}`,
			},
		});

		return data;
	} catch (err) {
		console.error(err);
		throw new Error("Error getting event info");
	}
};

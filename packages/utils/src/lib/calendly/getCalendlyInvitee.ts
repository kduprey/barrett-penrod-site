import type { CalendlyInvitee } from "@bpvs/types";
import axios from "axios";

export const getCalendlyInvitee = async (
	uri: string
): Promise<CalendlyInvitee> => {
	try {
		const response = await axios.get<CalendlyInvitee>(uri, {
			headers: {
				Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
			},
		});

		return response.data;
	} catch (err) {
		console.error(err);
		throw new Error("Error getting invitee");
	}
};

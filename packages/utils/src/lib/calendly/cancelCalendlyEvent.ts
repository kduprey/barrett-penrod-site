import type { CalendlyCancel } from "@bpvs/types";
import axios from "axios";

export const cancelCalendlyEvent = async (
	uri: string
): Promise<CalendlyCancel> => {
	try {
		const { data } = await axios.post<CalendlyCancel>(
			`${uri}/cancellation`,
			{
				reason: "The event was cancelled by the invitee.",
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
				},
			}
		);

		return data;
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error) throw error;
		throw new Error("Error cancelling event");
	}
};

import { CalendlyCancel } from "@bpvs/types";
import axios from "axios";

export const cancelCalendlyEvent = async (
	uri: string
): Promise<CalendlyCancel> => {
	if (uri === undefined || uri === "") throw new Error("Invalid URI");

	try {
		const { data } = await axios.post<CalendlyCancel>(
			`${uri}/cancellation`,
			{
				reason: "The event was cancelled by the invitee.",
			},
			{
				headers: {
					Authorization: `Bearer ${
						process.env["CALENDLY_API_KEY"] as string
					}`,
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

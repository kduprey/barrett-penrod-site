import { sendGuestEmails } from "@bpvs/emails-temp";
import { guestEmailsSchema } from "@bpvs/validation";
import type { NextApiRequest } from "next";
import { fromZodError } from "zod-validation-error";

// Template Data
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "sessionType": "Voice Lesson",
//     "bookingLocation": "Virtual",
//     "zoomLink": "https://zoom.us/testlink"
// }

/**
 * This endpoint is used to send a guest email to a list of guests whom are attending a session.
 * @param guests - The guests to send the email to
 * @param bookingDate - The time of the booking
 * @param bookingName - The name of the booking
 * @param zoomLink - The zoom link for the booking
 * @returns The response from SendGrid
 */

export const POST = async (req: NextApiRequest) => {
	const data = guestEmailsSchema.safeParse(req.body);

	if (!data.success)
		return new Response(fromZodError(data.error).message, { status: 400 });

	try {
		const response = await sendGuestEmails(data.data);
		return Response.json(response);
	} catch (error: unknown) {
		console.error(error);
		return new Response(
			JSON.stringify({
				message: "There was an error sending the email.",
			}),
			{ status: 500 }
		);
	}
};

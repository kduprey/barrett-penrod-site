import { sendSingleBookingEmail } from "@bpvs/emails-temp";
import { singleEmailSchema } from "@bpvs/validation";
import type { NextApiRequest } from "next";
import { fromZodError } from "zod-validation-error";

// Example of data for email template:
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "sessionType": "Voice Lesson",
//     "bookingLocation": "Virtual",
//     "zoomLink": "https://zoom.us/testlink"
// }

/**
 * This endpoint is used to send a single booking email to a client after booking a session.
 * @param client - The email address and name of the client
 * @param sessionType - The type of session
 * @param bookingDate - The date of the event
 * @param bookingLocation - The Location of the booking
 * @param zoomLink - The zoom link for the event (optional)
 * @returns - The response from SendGrid
 */

export const POST = async (req: NextApiRequest) => {
	const data = singleEmailSchema.safeParse(req.body);

	if (!data.success)
		return new Response(fromZodError(data.error).message, { status: 400 });

	try {
		const response = await sendSingleBookingEmail(data.data);
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

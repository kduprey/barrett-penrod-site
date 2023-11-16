import { sendFirstTimeEmail } from "@bpvs/emails-temp";
import { firstTimeEmailSchema } from "@bpvs/validation";
import type { NextRequest } from "next/server";
import { fromZodError } from "zod-validation-error";

// Example for template data
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "sessionType": "Voice Lesson",
//     "bookingLocation": "Virtual",
//     "zoomLink": "https://zoom.us/testlink"
// }

/**
 * This endpoint is used to send a first time email to a client after booking a session.
 * @param email - The email address of the client
 * @param name - The name of the client
 * @param bookingDate - The date of the event
 * @param bookingName - The name of the booking
 * @param zoomLink - The zoom link for the event
 * @returns The response from SendGrid
 */

export const POST = async (req: NextRequest) => {
	const data = firstTimeEmailSchema.safeParse(req.body);

	if (!data.success)
		return new Response(fromZodError(data.error).message, { status: 400 });

	try {
		const response = await sendFirstTimeEmail(data.data);
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

import { sendConsultationEmail } from "@bpvs/emails-temp";
import { consultationEmailSchema } from "@bpvs/validation";
import type { NextApiRequest } from "next";
import { fromZodError } from "zod-validation-error";

// Example for email template data:
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "zoomLink": "https://us06web.zoom.us/j/87847325639"
// }

/**
 * This endpoint is used to send a confirmation email to a client after booking a consultation.
 * @param client - The client's email and name
 * @param bookingDate - The start time of the consultation
 * @param zoomLink - The link to the Zoom meeting
 * @returns The response from SendGrid
 */

export const POST = async (req: NextApiRequest) => {
	const data = consultationEmailSchema.safeParse(req.body);

	if (!data.success)
		return new Response(fromZodError(data.error).message, { status: 400 });

	try {
		const response = await sendConsultationEmail(data.data);
		return Response.json(response);
	} catch (error: unknown) {
		console.error(error);
		console.error(error);
		return new Response(
			JSON.stringify({
				message: "There was an error sending the email.",
			}),
			{ status: 500 }
		);
	}
};

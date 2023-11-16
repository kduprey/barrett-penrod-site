import { sendPackageConfirmationEmail } from "@bpvs/emails-temp";
import { packageConfirmationEmailSchema } from "@bpvs/validation";
import type { NextRequest } from "next/server";
import { fromZodError } from "zod-validation-error";

// Example of email template data:
// {
//     "packageName": "4 Session Package",
//     "bookingDate": "June 26, 2022",
//     "sessionType": "Voice Lesson",
//     "bookingTime": "2:00 pm",
//     "bookingLocation": "Virtual",
//     "zoomLink": "https://zoom.us/testLink"
// }

/**
 * This endpoint is used to send a package confirmation email to a client after booking a package.
 * @param client - The email address and name of the client
 * @param packageName - The name of the package that was booked
 * @param sessionType - The type of session in the package
 * @param bookingDate - The date and time of the first lesson in the package
 * @param bookingLocation - The location of the first lesson in the package
 * @param zoomLink - The zoom link for the first lesson in the package
 * @returns - The response from SendGrid
 */

export const POST = async (req: NextRequest) => {
	const data = packageConfirmationEmailSchema.safeParse(req.body);

	if (!data.success)
		return new Response(fromZodError(data.error).message, { status: 400 });

	try {
		const response = await sendPackageConfirmationEmail(data.data);
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

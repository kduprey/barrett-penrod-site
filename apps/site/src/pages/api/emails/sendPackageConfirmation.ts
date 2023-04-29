import { sendPackageConfirmationEmail } from "@bpvs/emails-temp";
import { apiHandler } from "@bpvs/utils";
import { packageConfirmationEmailSchema } from "@bpvs/validation";
import createHttpError from "http-errors";
import type { NextApiRequest, NextApiResponse } from "next";

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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const data = packageConfirmationEmailSchema.parse(req.body);
	try {
		const response = await sendPackageConfirmationEmail(data);
		res.status(200).json(response);
	} catch (error: unknown) {
		console.log(error);
		if (error instanceof Error)
			throw new createHttpError.InternalServerError(
				JSON.stringify({
					message: "There was an error sending the email.",
					error,
				})
			);
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "There was an error sending the email.",
			})
		);
	}
};

export default apiHandler({
	POST: handler,
});

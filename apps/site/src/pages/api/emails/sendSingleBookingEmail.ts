import { sendSingleBookingEmail } from "@bpvs/emails-temp";
import { apiHandler } from "@bpvs/utils";
import { singleEmailSchema } from "@bpvs/validation";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

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

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const data = singleEmailSchema.parse(req.body);

	try {
		const response = await sendSingleBookingEmail(data);
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

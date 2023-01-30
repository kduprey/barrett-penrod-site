import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import createHttpError from "http-errors";
import type { NextApiRequest, NextApiResponse } from "next";
import apiHandler from "utils/api";
import { validateRequest } from "utils/yup";
import { dev, sendgrid } from "../../../config";
import {
	emailDataSchema,
	EmailTemplateData,
	firstTimeEmail,
} from "../../../types/emailTypes";

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
 * @param email The email address of the client
 * @param name The name of the client
 * @param bookingDate The date of the event
 * @param bookingName The name of the booking
 * @param zoomLink The zoom link for the event
 * @returns The response from SendGrid
 */

const sendFirstTimeEmail = async ({
	client,
	bookingDate,
	sessionType,
	bookingLocation,
	zoomLink,
}: firstTimeEmail): Promise<[ClientResponse, {}]> => {
	const templateId: string = "d-c859a7aa6e04450b952a683aeb9ded1d";

	const message: MailDataRequired = {
		from: {
			email: "barrett@barrettpenrod.com",
			name: "Barrett Penrod Voice Studio",
		},
		replyTo: {
			email: "barrettpenrod@gmail.com",
			name: "Barrett Penrod",
		},
		personalizations: [
			{
				to: client,
				dynamicTemplateData: {
					bookingTime: new Date(bookingDate).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
					bookingDate: new Date(bookingDate).toLocaleDateString([], {
						weekday: "long",
						month: "short",
						day: "numeric",
						year: "numeric",
					}),
					sessionType,
					bookingLocation,
					zoomLink,
				},
			},
		],
		templateId,
		mailSettings: {
			sandboxMode: {
				enable: dev,
			},
		},
	};

	try {
		const response = await sendgrid.send(message);
		return response;
	} catch (error: any) {
		console.error(error);
		throw new Error("Error sending email", error);
	}
};

export { sendFirstTimeEmail };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const data = validateRequest(req.body, emailDataSchema);

	try {
		const response = await sendFirstTimeEmail(data);
		res.status(200).json(response);
	} catch (error: any) {
		console.error(error.body);
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "There was an error sending the email.",
				error,
			})
		);
	}
};

export default apiHandler({
	POST: handler,
});

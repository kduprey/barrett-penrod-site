import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendgrid } from "../../../config";
import { EmailTemplateData } from "../../../types/emailTypes";
import { invalidMethod } from "../../../utils/responseDefaults";

// Example for template data
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "bookingName": "Virtual via Zoom",
//     "zoomLink": "https://zoom.us/link"
// }

type FirstTimeEmailParams = {
	email: string;
	name: string;
	bookingDate: string;
	bookingName: string;
	zoomLink?: string;
};

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
	email,
	name,
	bookingDate,
	bookingName,
	zoomLink,
}: FirstTimeEmailParams): Promise<[ClientResponse, {}]> => {
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
				to: [
					{
						email,
						name,
					},
				],
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
					bookingName,
					zoomLink,
				} as EmailTemplateData,
			},
		],
		templateId,
	};

	try {
		const response = await sendgrid.send(message);
		return response;
	} catch (error: any) {
		console.error(error);
		return error;
	}
};

export { sendFirstTimeEmail };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	invalidMethod("POST", req, res);

	const { email, name, bookingDate, bookingName, zoomLink } = req.body;

	if (!email || !name || !bookingDate || !bookingName) {
		res.status(400).json({
			error: "Missing required parameters",
		});
		return;
	}

	try {
		const response = await sendFirstTimeEmail({
			email,
			name,
			bookingDate,
			bookingName,
			zoomLink,
		});
		res.status(200).json({
			message: response,
		});
	} catch (error: any) {
		console.error(error.body);
		res.status(500).json({
			message: error,
		});
	}
};

export default handler;

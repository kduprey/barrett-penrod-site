import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { sendgrid } from "../../../config/index";
import { EmailTemplateData } from "../../../types/emailTypes";
import { invalidMethod } from "../../../utils/responseDefaults";

// Example for email template data:
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "bookingName": "Virtual via Zoom",
//     "zoomLink": "https://us06web.zoom.us/j/87847325639"
// }

type ConsultationEmailParams = {
	email: string;
	name: string;
	bookingDate: string;
	bookingName: string;
	zoomLink: string;
};

/**
 * This endpoint is used to send a confirmation email to a client after booking a consultation.
 * @param email - The email address of the client
 * @param name - The name of the client
 * @param bookingDate - The start time of the consultation
 * @param bookingName - The name of the consultation
 * @param zoomLink - The link to the Zoom meeting
 * @returns The response from SendGrid
 */

const sendConsultationEmail = async ({
	email,
	name,
	bookingDate,
	bookingName,
	zoomLink,
}: ConsultationEmailParams): Promise<[ClientResponse, {}] | Error> => {
	const templateId: string = "d-4a2d850cce134d40bdd662e3fe2a96b3";

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
		return await sendgrid.send(message);
	} catch (error) {
		console.error(error);
		return new Error("Error sending email");
	}
};

export { sendConsultationEmail };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, name, bookingDate, bookingName, zoomLink } = req.body;

	// If one of the required fields is missing, return an error
	if (
		!email ||
		typeof email !== "string" ||
		!name ||
		typeof name !== "string" ||
		!bookingDate ||
		typeof bookingDate !== "string" ||
		!bookingName ||
		typeof bookingName !== "string" ||
		!zoomLink ||
		typeof zoomLink !== "string"
	) {
		res.status(400).json({ message: "Missing required field" });
		return;
	}

	invalidMethod("POST", req, res);

	try {
		const response = await sendConsultationEmail(
			req.body as ConsultationEmailParams
		);
		res.status(200).json({ message: response });
	} catch (error: any) {
		console.error(error.body);
		res.status(500).json(error);
	}
};

export default handler;

import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendgrid } from "../../../config";
import { Contact, EmailTemplateData } from "../../../types/emailTypes";
import { invalidMethod } from "../../../utils/responseDefaults";

// Template Data
// {
//     "bookingDate": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "bookingName": "Voice Lesson - Virtual",
//     "zoomLink": "https://zoom.us/testlink"
// }

type GuestEmailsParams = {
	guests: Contact[];
	bookingDate: string;
	bookingName: string;
	zoomLink?: string;
};

/**
 * This endpoint is used to send a guest email to a list of guests whom are attending a session.
 * @param guests - The guests to send the email to
 * @param bookingDate - The time of the booking
 * @param bookingName - The name of the booking
 * @param zoomLink - The zoom link for the booking
 * @returns The response from SendGrid
 */

const sendGuestEmails = async ({
	guests,
	bookingDate,
	bookingName,
	zoomLink,
}: GuestEmailsParams): Promise<[ClientResponse, {}]> => {
	const templateId: string = "d-b628680e34354157b553625c036e2836";

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
				to: [...guests],
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
		console.log(response);
		return response;
	} catch (error: any) {
		console.error(error);
		return error;
	}
};

export { sendGuestEmails };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	invalidMethod("POST", req, res);

	const { guests, bookingDate, bookingName, zoomLink } = req.body;

	if (!guests || !bookingDate || !bookingName) {
		res.status(400).json({
			error: "Missing required fields",
		});
	}

	try {
		const response = await sendGuestEmails({
			guests,
			bookingDate,
			bookingName,
			zoomLink,
		});
		console.log(response);
		res.status(200).json({ message: response });
	} catch (error: any) {
		console.error(error.body);
		res.status(500).json({ message: error });
	}
};

export default handler;

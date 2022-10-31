import { MailDataRequired } from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendgrid } from "../../../config";
import { Contact, EmailTemplateData } from "../../../types/emailTypes";
import { invalidMethod } from "../../../utils/responseDefaults";

// Template Data
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "bookingName": "Voice Lesson - Virtual",
//     "zoomLink": "https://zoom.us/testlink"
// }

type GuestEmailsParams = {
	guests: Contact[];
	bookingTime: string;
	bookingName: string;
	zoomLink?: string;
};

const sendGuestEmails = async ({
	guests,
	bookingTime,
	bookingName,
	zoomLink,
}: GuestEmailsParams) => {
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
					bookingTime: new Date(bookingTime).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
					bookingDate: new Date(bookingTime).toLocaleDateString([], {
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

	try {
		const response = await sendGuestEmails(req.body as GuestEmailsParams);
		console.log(response);
		res.status(200).json({ message: response });
	} catch (error: any) {
		console.error(error.body);
		res.status(500).json({ message: error });
	}
};

export default handler;

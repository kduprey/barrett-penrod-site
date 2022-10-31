import { MailDataRequired } from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendgrid } from "../../../config";
import { EmailTemplateData } from "../../../types/emailTypes";

type SingleBookingEmailParams = {
	email: string;
	name: string;
	bookingDate: string;
	bookingName: string;
	zoomLink?: string;
};
// Example of data for email template:
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "service": "Virtual via Zoom",
//     "zoomLink": "https://zoom.us/testlink"
// }

const sendSingleBookingEmail = async ({
	email,
	name,
	bookingDate,
	bookingName,
	zoomLink,
}: SingleBookingEmailParams) => {
	const templateId: string = "d-d3b1109a7bd44612b10c3e60ed9024da";

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
		console.log(error);
		return error;
	}
};

export { sendSingleBookingEmail };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST")
		res.status(405).json({ message: "Method not allowed" });

	try {
		const response = await sendSingleBookingEmail(
			req.body as SingleBookingEmailParams
		);
		res.status(200).json({ message: response });
	} catch (error: any) {
		console.log(error);
		res.status(500).json(error);
	}
};

export default handler;

import { MailDataRequired } from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendgrid } from "../../../config";
import { EmailTemplateData } from "../../../types/emailTypes";

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
	eventDate: string;
	bookingName: string;
	zoomLink?: string;
};

const sendFirstTimeEmail = async ({
	email,
	name,
	eventDate,
	bookingName,
	zoomLink,
}: FirstTimeEmailParams) => {
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
					bookingTime: new Date(eventDate).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
					bookingDate: new Date(eventDate).toLocaleDateString([], {
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
	if (req.method !== "POST")
		res.status(405).json({ message: "Method not allowed" });

	try {
		const response = await sendFirstTimeEmail(
			req.body as FirstTimeEmailParams
		);
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

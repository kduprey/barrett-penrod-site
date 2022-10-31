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
	startTime: string;
	bookingName: string;
	zoomLink: string;
};

const sendConsultationEmail = async ({
	email,
	name,
	startTime,
	bookingName,
	zoomLink,
}: ConsultationEmailParams): Promise<[ClientResponse, {}]> => {
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
					bookingTime: new Date(startTime).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
					bookingDate: new Date(startTime).toLocaleDateString([], {
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
		console.error(error.body);
		return error;
	}
};

export { sendConsultationEmail };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
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

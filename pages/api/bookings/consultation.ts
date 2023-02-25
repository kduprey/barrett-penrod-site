import { MailDataRequired } from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { sendgrid } from "../../../config/index";
import { ConsultationTemplateData } from "../../../types";
type Data = {
	message: any;
};

type Body = {
	invitee_email: string;
	invitee_full_name: string;
	eventStartTime: string;
	eventTypeName: string;
	zoomLink: string;
};

const consultation = async (
	req: NextApiRequest,
	res: NextApiResponse<Data>
) => {
	const data: Body = req.body;

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
						email: data.invitee_email,
						name: data.invitee_full_name,
					},
				],
				dynamicTemplateData: {
					bookingTime: new Date(
						data.eventStartTime
					).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
					bookingDate: new Date(
						data.eventStartTime
					).toLocaleDateString([], {
						weekday: "long",
						month: "short",
						day: "numeric",
						year: "numeric",
					}),
					bookingName: data.eventTypeName,
					zoomLink: data.zoomLink,
				} as ConsultationTemplateData,
			},
		],
		templateId,
	};

	try {
		const response = await sendgrid.send(message);
		res.status(200).json({ message: response });
	} catch (error: any) {
		console.error(error.body);
		res.status(500).json(error);
	}
};

export default consultation;

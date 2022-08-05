import type { NextApiRequest, NextApiResponse } from "next";
import { TemplateMessage } from "../../../types";
const sendgrid = require("@sendgrid/mail");
if (process.env.NODE_ENV === "production") {
	sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
} else {
	sendgrid.setApiKey(process.env.SENDGRID_DEV_API_KEY);
}

type Data = {
	message: any;
};

type Body = {
	invitee_email: string;
	invitee_full_name: string;
	eventStartTime: string;
	eventTypeName: string;
};

const firstTime = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const data: Body = req.body;

	const template_id: string = "d-c859a7aa6e04450b952a683aeb9ded1d";

	const message: TemplateMessage = {
		from: {
			email: "barrett@barrettpenrod.com",
			name: "Barrett Penrod Voice Studio",
		},
		reply_to: {
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
				dynamic_template_data: {
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
				},
			},
		],
		template_id,
	};

	try {
		const response = await sendgrid.send(message);
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

export default firstTime;

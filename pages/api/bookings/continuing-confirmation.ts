import type { NextApiRequest, NextApiResponse } from "next";
import { TemplateMessage } from "../../../types";

const sendgrid = require("@sendgrid/mail");
if (process.env.NODE_ENV === "production") {
	sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
} else {
	sendgrid.setApiKey(process.env.SENDGRID_DEV_API_KEY);
}

type Data = {};

type Body = {
	invitee_email: string;
	invitee_full_name: string;
	bookingTime: string;
	bookingDate: string;
	service: string;
};
// Example of data for body:
// {
//     "BookingTime": "2:00 pm",
//     "BookingDate": "June 26, 2022",
//     "service": "Virtual via Zoom"
// }

const continuingConfirmation = async (
	req: NextApiRequest,
	res: NextApiResponse<Data>
) => {
	const data: Body = req.body;

	const template_id: string = "d-d3b1109a7bd44612b10c3e60ed9024da";

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
					bookingTime: new Date(data.bookingTime).toLocaleTimeString(
						[],
						{
							hour: "2-digit",
							minute: "2-digit",
						}
					),
					bookingDate: new Date(data.bookingDate).toLocaleDateString(
						[],
						{
							weekday: "long",
							month: "short",
							day: "numeric",
							year: "numeric",
						}
					),
					bookingName: data.service,
				},
			},
		],
		template_id,
	};

	try {
		const response = await sendgrid.send(message);
		res.status(200).json({ message: response });
	} catch (error: any) {
		console.log(error);
		res.status(500).json(error);
	}
};

export default continuingConfirmation;

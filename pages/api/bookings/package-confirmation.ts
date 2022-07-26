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
	bulkSessionDiscountPackage: string;
	dateOfFirstSession: string;
	bookingTime: string;
	bookingDate: string;
	bookingLocation: string;
};

// {
//     "bulkSessionDiscountPackage": "4 Session Package",
//     "dateOfFirstSession": "June 26, 2022",
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "bookingLocation": "Virtual via Zoom"
// }

const packageConfirmation = async (
	req: NextApiRequest,
	res: NextApiResponse<Data>
) => {
	const data: Body = req.body;

	const template_id: string = "d-368ad77a4b3d4fb9ac48daa0b10eb63e";

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
					bulkSessionDiscountPackage: data.bulkSessionDiscountPackage,
					dateOfFirstSession: new Date(
						data.dateOfFirstSession
					).toLocaleDateString([], {
						weekday: "long",
						month: "short",
						day: "numeric",
						year: "numeric",
					}),
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
					bookingLocation: data.bookingLocation,
				},
			},
		],
		template_id,
	};

	try {
		const response = await sendgrid.send(message);
		res.status(200).json(response);
	} catch (error: any) {
		console.log(error);
		res.status(500).json(error);
	}
};

export default packageConfirmation;

import type { NextApiRequest, NextApiResponse } from "next";
import { Contact, GuestBody, TemplateMessage } from "../../../types";

const sendgrid = require("@sendgrid/mail");
if (process.env.NODE_ENV === "production") {
	sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
} else {
	sendgrid.setApiKey(process.env.SENDGRID_DEV_API_KEY);
}

type Data = {
	message: any;
};

// Body:
// {
// 	session_id: req.query.session_id,
// 	guests: req.query.guests,
// 	eventStartTime: req.query.event_start_time,
// 	eventEndTime: req.query.event_end_time,
// 	eventTypeName: req.query.event_type_name,
// }

// Template Data
// {
//     "BookingTime": time,
//     "BookingDate": date,
//     "BookingLocation": booking name
// }

const guest = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const data: GuestBody = req.body;

	const template_id: string = "d-b628680e34354157b553625c036e2836";

	const guests: Contact[] = data.guests
		.split(",")
		.map((guestEmail: string) => {
			return {
				email: guestEmail,
			};
		});

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
				to: [...guests],
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
		console.log(response);
		res.status(200).json({ message: response });
	} catch (error: any) {
		console.error(error.body);
		res.status(500).json({ message: error });
	}
};

export default guest;

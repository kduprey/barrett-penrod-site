import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import {
	SessionLocation,
	SessionLocations,
	SessionType,
	SessionTypes,
} from "types/types";
import apiHandler from "utils/api";
import { validateRequest } from "utils/yup";
import * as yup from "yup";
import { dev, sendgrid } from "../../../config";
import { clientSchema, singleEmail } from "../../../types/emailTypes";

// Example of data for email template:
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "sessionType": "Voice Lesson",
//     "bookingLocation": "Virtual",
//     "zoomLink": "https://zoom.us/testlink"
// }

/**
 * This endpoint is used to send a single booking email to a client after booking a session.
 * @param client - The email address and name of the client
 * @param sessionType - The type of session
 * @param bookingDate - The date of the event
 * @param bookingLocation - The Location of the booking
 * @param zoomLink - The zoom link for the event (optional)
 * @returns - The response from SendGrid
 */

const schema: yup.SchemaOf<singleEmail> = yup.object({
	client: clientSchema,
	sessionType: yup
		.mixed<SessionType>()
		.oneOf([...SessionTypes])
		.defined(),
	bookingDate: yup.date().required(),
	bookingLocation: yup
		.mixed<SessionLocation>()
		.oneOf([...SessionLocations])
		.defined()
		.required(),
	zoomLink: yup.string().url(),
});

const sendSingleBookingEmail = async ({
	client,
	sessionType,
	bookingDate,
	bookingLocation,
	zoomLink,
}: singleEmail): Promise<[ClientResponse, {}]> => {
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
				to: {
					...client,
				},
				dynamicTemplateData: {
					sessionType,
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
					bookingLocation,
					zoomLink,
				},
			},
		],
		templateId,
		mailSettings: {
			sandboxMode: {
				enable: dev,
			},
		},
	};

	try {
		const response = await sendgrid.send(message);
		return response;
	} catch (error: any) {
		console.log(error);
		throw new Error("Error sending email", error);
	}
};

export { sendSingleBookingEmail };

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const data = validateRequest(req.body, schema);

	try {
		const response = await sendSingleBookingEmail(data);
		res.status(200).json(response);
	} catch (error: any) {
		console.log(error);
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "There was an error sending the email.",
				error,
			})
		);
	}
};

export default apiHandler({
	POST: handler,
});

import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import createHttpError from "http-errors";
import type { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import { sendgrid } from "../../../config";
import { dev } from "../../../config/dev";
import { GuestEmails, validateBookingDate } from "../../../types/emailTypes";
import {
	SessionLocation,
	SessionLocations,
	SessionType,
	SessionTypes,
} from "../../../types/types";
import apiHandler from "../../../utils/api";
import { validateRequest } from "../../../utils/yup";

// Template Data
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "sessionType": "Voice Lesson",
//     "bookingLocation": "Virtual",
//     "zoomLink": "https://zoom.us/testlink"
// }

/**
 * This endpoint is used to send a guest email to a list of guests whom are attending a session.
 * @param guests - The guests to send the email to
 * @param bookingDate - The time of the booking
 * @param bookingName - The name of the booking
 * @param zoomLink - The zoom link for the booking
 * @returns The response from SendGrid
 */

const schema: yup.SchemaOf<GuestEmails> = yup.object({
	guests: yup
		.array(
			yup
				.object()
				.shape({
					email: yup
						.string()
						.email("Client email must be a valid email address")
						.defined()
						.required("Client email is required"),
					name: yup.string(),
				})
				.defined()
				.required()
		)
		.defined()
		.required(),
	bookingDate: yup
		.date()
		.required(
			"Booking date and time is required (e.g. 2022-06-26T14:00:00.000Z)"
		),
	sessionType: yup
		.mixed<SessionType>()
		.oneOf([...SessionTypes])
		.defined()
		.required(),
	bookingLocation: yup
		.mixed<SessionLocation>()
		.oneOf([...SessionLocations])
		.defined()
		.required(),
	zoomLink: yup
		.string()
		.url(
			"Please enter a valid Zoom link (e.g. https://us06web.zoom.us/j/xxxxxx)"
		),
});

const sendGuestEmails = async ({
	guests,
	sessionType,
	bookingLocation,
	bookingDate,
	zoomLink,
}: GuestEmails): Promise<ClientResponse> => {
	const templateId = "d-b628680e34354157b553625c036e2836";

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
					sessionType,
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
		console.log(response);
		return response[0];
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			throw new Error("Error sending email", error);
		throw new Error("Error sending email");
	}
};

export { sendGuestEmails };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	req.body.bookingDate = validateBookingDate(req);
	const data = validateRequest(req.body, schema);

	try {
		const response = await sendGuestEmails(data as GuestEmails);
		console.log(response);
		res.status(200).json(response);
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error) {
			throw new createHttpError.InternalServerError(
				JSON.stringify({
					message: "There was an error sending the email.",
					error,
				})
			);
		}
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "There was an error sending the email.",
			})
		);
	}
};

export default apiHandler({
	POST: handler,
});

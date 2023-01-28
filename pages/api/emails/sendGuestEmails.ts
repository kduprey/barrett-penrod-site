import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import createHttpError from "http-errors";
import type { NextApiRequest, NextApiResponse } from "next";
import {
	SessionLocation,
	SessionLocations,
	SessionType,
	SessionTypes,
} from "types/types";
import apiHandler from "utils/api";
import { validateRequest } from "utils/yup";
import * as yup from "yup";
import { sendgrid } from "../../../config";
import {
	clientSchema,
	Contact,
	EmailTemplateData,
	GuestEmails,
} from "../../../types/emailTypes";

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
	bookingDate: yup.date().required(),
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
}: GuestEmails): Promise<[ClientResponse, {}]> => {
	const templateId: string = "d-b628680e34354157b553625c036e2836";

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
	};

	try {
		const response = await sendgrid.send(message);
		console.log(response);
		return response;
	} catch (error: any) {
		console.error(error);
		throw new Error(error);
	}
};

export { sendGuestEmails };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const data = validateRequest(req.body, schema);

	try {
		const response = await sendGuestEmails(data as GuestEmails);
		console.log(response);
		res.status(200).json(response);
	} catch (error: any) {
		console.error(error);
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

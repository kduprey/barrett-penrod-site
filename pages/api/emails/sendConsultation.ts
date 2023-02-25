import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import createHttpError from "http-errors";
import { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import { dev } from "../../../config/dev";
import { sendgrid } from "../../../config/index";
import {
	clientSchema,
	ConsultationEmail,
	validateBookingDate,
} from "../../../types/emailTypes";
import apiHandler from "../../../utils/api";
import { validateRequest } from "../../../utils/yup";

// Example for email template data:
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "zoomLink": "https://us06web.zoom.us/j/87847325639"
// }

const schema: yup.SchemaOf<ConsultationEmail> = yup.object({
	client: clientSchema,
	bookingDate: yup
		.date()
		.required(
			"Booking date and time is required (e.g. 2022-06-26T14:00:00.000Z)"
		),
	zoomLink: yup
		.string()
		.url(
			"Please enter a valid Zoom link (e.g. https://us06web.zoom.us/j/xxxxxx)"
		)
		.required(
			"Zoom link for booking is required (e.g. https://us06web.zoom.us/j/xxxxxx)"
		),
});

/**
 * This endpoint is used to send a confirmation email to a client after booking a consultation.
 * @param client - The client's email and name
 * @param bookingDate - The start time of the consultation
 * @param zoomLink - The link to the Zoom meeting
 * @returns The response from SendGrid
 */

const sendConsultationEmail = async ({
	client,
	bookingDate,
	zoomLink,
}: ConsultationEmail): Promise<ClientResponse> => {
	const templateId = "d-4a2d850cce134d40bdd662e3fe2a96b3";

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
				to: client,
				dynamicTemplateData: {
					bookingTime: bookingDate.toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
					bookingDate: bookingDate.toLocaleDateString([], {
						weekday: "long",
						month: "short",
						day: "numeric",
						year: "numeric",
					}),
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
		console.log("Sending consultation email...");
		const response = await sendgrid.send(message);
		console.log("Consultation Email sent!");
		return response[0];
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			throw new Error("Error sending consultation email", error);

		throw new Error("Error sending email");
	}
};

export { sendConsultationEmail };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	req.body.bookingDate = validateBookingDate(req);
	const data = validateRequest(req.body, schema);

	try {
		const response = await sendConsultationEmail(data);
		res.status(200).json(response);
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			throw new createHttpError.InternalServerError(
				JSON.stringify({
					message: "There was an error sending the email.",
					error,
				})
			);

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

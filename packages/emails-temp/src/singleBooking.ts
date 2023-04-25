import { SingleEmail, dev } from "@bpvs/types";
import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import { sendgrid } from "./sendgrid";

/**
 * This endpoint is used to send a single booking email to a client after booking a session.
 * @param client - The email address and name of the client
 * @param sessionType - The type of session
 * @param bookingDate - The date of the event
 * @param bookingLocation - The Location of the booking
 * @param zoomLink - The zoom link for the event (optional)
 * @returns - The response from SendGrid
 */

export const sendSingleBookingEmail = async ({
	client,
	sessionType,
	bookingDate,
	bookingLocation,
	zoomLink,
}: SingleEmail): Promise<ClientResponse> => {
	const templateId = "d-d3b1109a7bd44612b10c3e60ed9024da";

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
		console.log("Sending single booking email...");

		const response = await sendgrid.send(message);
		return response[0];
	} catch (error: unknown) {
		console.log(error);
		if (error instanceof Error)
			throw new Error(`Error sending email: ${error}`);

		throw new Error("Error sending email");
	}
};

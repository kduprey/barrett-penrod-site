import type { FirstTimeEmail } from "@bpvs/types";
import { dev } from "@bpvs/types";
import type { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import { sendgrid } from "./sendgrid";

/**
 * This endpoint is used to send a first time email to a client after booking a session.
 * @param email - The email address of the client
 * @param name - The name of the client
 * @param bookingDate - The date of the event
 * @param bookingName - The name of the booking
 * @param zoomLink - The zoom link for the event
 * @returns The response from SendGrid
 */

export const sendFirstTimeEmail = async ({
	client,
	bookingDate,
	sessionType,
	bookingLocation,
	zoomLink,
}: FirstTimeEmail): Promise<ClientResponse> => {
	const templateId = "d-c859a7aa6e04450b952a683aeb9ded1d";

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
		console.info("Sending first time email...");

		const response = await sendgrid.send(message);
		console.info("Email sent!");

		return response[0];
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			throw new Error(`Error sending email: ${error.message}`);

		throw new Error("Error sending email");
	}
};

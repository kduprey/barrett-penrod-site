import { ConsultationEmail, dev } from "@bpvs/types";
import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import { sendgrid } from "./sendgrid";

/**
 * This endpoint is used to send a confirmation email to a client after booking a consultation.
 * @param client - The client's email and name
 * @param bookingDate - The start time of the consultation
 * @param zoomLink - The link to the Zoom meeting
 * @returns The response from SendGrid
 */

export const sendConsultationEmail = async ({
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
			throw new Error(
				`Error sending consultation email: ${error.message}`
			);

		throw new Error("Error sending email");
	}
};

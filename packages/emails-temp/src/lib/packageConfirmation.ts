import type { PackageConfirmationEmail } from "@bpvs/types";
import { dev } from "@bpvs/types";
import type { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import { sendgrid } from "./sendgrid";

/**
 * This endpoint is used to send a package confirmation email to a client after booking a package.
 * @param client - The email address and name of the client
 * @param packageName - The name of the package that was booked
 * @param sessionType - The type of session in the package
 * @param bookingDate - The date and time of the first lesson in the package
 * @param bookingLocation - The location of the first lesson in the package
 * @param zoomLink - The zoom link for the first lesson in the package
 * @returns - The response from SendGrid
 */

export const sendPackageConfirmationEmail = async ({
	client,
	packageName,
	sessionType,
	bookingDate,
	bookingLocation,
	zoomLink,
}: PackageConfirmationEmail): Promise<ClientResponse> => {
	const templateId = "d-368ad77a4b3d4fb9ac48daa0b10eb63e";

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
					packageName,
					bookingDate: new Date(bookingDate).toLocaleDateString([], {
						weekday: "long",
						month: "short",
						day: "numeric",
						year: "numeric",
					}),
					bookingTime: new Date(bookingDate).toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
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
		console.info("Sending package confirmation email...");

		const response = await sendgrid.send(message);
		console.info("Package confirmation email sent!");

		return response[0];
	} catch (error: unknown) {
		console.info(error);
		if (error instanceof Error)
			throw new Error(`Error sending email: ${error.message}`);

		throw new Error("Error sending email");
	}
};

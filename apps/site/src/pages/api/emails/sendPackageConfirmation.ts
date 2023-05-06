import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import { dev, sendgrid } from "config/index";
import createHttpError from "http-errors";
import type { NextApiRequest, NextApiResponse } from "next";
import * as yup from "yup";
import {
	emailDataSchema,
	PackageConfirmationEmail,
	validateBookingDate,
} from "../../../types/emailTypes";
import { PackageType, PackageTypes } from "../../../types/types";
import apiHandler from "../../../utils/api";
import { validateRequest } from "../../../utils/yup";

// Example of email template data:
// {
//     "packageName": "4 Session Package",
//     "bookingDate": "June 26, 2022",
//     "sessionType": "Voice Lesson",
//     "bookingTime": "2:00 pm",
//     "bookingLocation": "Virtual",
//     "zoomLink": "https://zoom.us/testLink"
// }

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

const schema: yup.SchemaOf<PackageConfirmationEmail> = yup
	.object({
		packageName: yup
			.mixed<PackageType>()
			.oneOf([...PackageTypes])
			.defined(),
	})
	.concat(emailDataSchema);

const sendPackageConfirmationEmail = async ({
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
		console.log("Sending package confirmation email...");

		const response = await sendgrid.send(message);
		console.log("Package confirmation email sent!");

		return response[0];
	} catch (error: unknown) {
		console.log(error);
		if (error instanceof Error)
			throw new Error("Error sending email", error);

		throw new Error("Error sending email");
	}
};

export { sendPackageConfirmationEmail };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	req.body.bookingDate = validateBookingDate(req);
	const data = validateRequest(req.body, schema);

	try {
		const response = await sendPackageConfirmationEmail(data);
		res.status(200).json(response);
	} catch (error: unknown) {
		console.log(error);
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

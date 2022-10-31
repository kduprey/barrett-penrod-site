import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendgrid } from "../../../config/index";
import { PackageEmailTemplateData } from "../../../types/emailTypes";
import { invalidMethod } from "../../../utils/responseDefaults";

type PackageConfirmationEmailParams = {
	email: string;
	name: string;
	packageName: string;
	bookingDate: string;
	bookingLocation: string;
	zoomLink: string;
};

// Example of email template data:
// {
//     "packageName": "4 Session Package",
//     "bookingDate": "June 26, 2022",
//     "bookingTime": "2:00 pm",
//     "bookingLocation": "Virtual via Zoom",
//     "zoomLink": "https://zoom.us/testLink"
// }

const sendPackageConfirmationEmail = async ({
	email,
	name,
	packageName,
	bookingDate,
	bookingLocation,
	zoomLink,
}: PackageConfirmationEmailParams): Promise<[ClientResponse, {}]> => {
	const templateId: string = "d-368ad77a4b3d4fb9ac48daa0b10eb63e";

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
				to: [
					{
						email,
						name,
					},
				],
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
					bookingLocation,
					zoomLink,
				} as PackageEmailTemplateData,
			},
		],
		templateId,
	};

	try {
		const response = await sendgrid.send(message);
		return response;
	} catch (error: any) {
		console.log(error);
		return error;
	}
};

export { sendPackageConfirmationEmail };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	invalidMethod("POST", req, res);

	try {
		const response = await sendPackageConfirmationEmail(
			req.body as PackageConfirmationEmailParams
		);
		res.status(200).json(response);
	} catch (error: any) {
		console.log(error);
		res.status(500).json(error);
	}
};

export default handler;

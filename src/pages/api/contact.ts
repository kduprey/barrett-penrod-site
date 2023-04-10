import { contacts } from "@prisma/client";
import createHttpError from "http-errors";
import type {
	NextApiHandler,
	NextApiRequest,
	NextApiResponse,
} from "next/types";
import { z } from "zod";
import prisma from "../../lib/prisma";
import apiHandler from "../../utils/api";

export type ContactFormBody = {
	name: string;
	email: string;
	message: string;
};

const ContactFormBodySchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email"),
	message: z.string().min(2, "Message must be at least 2 characters"),
});

const contact = async (data: ContactFormBody): Promise<contacts> => {
	const validData = ContactFormBodySchema.parse(data);

	try {
		const data = await prisma.contacts.create({
			data: validData,
		});

		return data;
	} catch (error: unknown) {
		if (error instanceof Error) throw error;
		throw new Error("Error saving message");
	}
};

export { contact };

const POSTContact: NextApiHandler<contacts> = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	try {
		const data = await ContactFormBodySchema.parseAsync(req.body);
		const response = await contact(data);

		res.status(200).json(response);
	} catch (error: unknown) {
		console.error(error);
		if (error instanceof Error)
			throw new createHttpError.InternalServerError(
				JSON.stringify({
					message: "Error sending message",
					error,
				})
			);
		throw new createHttpError.InternalServerError(
			JSON.stringify({
				message: "Error sending message",
				error: "Unknown error",
			})
		);
	}
};

export default apiHandler({
	POST: POSTContact,
});

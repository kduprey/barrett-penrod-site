import type { contacts } from "@bpvs/db";
import { prisma } from "@bpvs/db";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export interface ContactFormBody {
	name: string;
	email: string;
	message: string;
}

export const ContactFormBodySchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email"),
	message: z.string().min(2, "Message must be at least 2 characters"),
});

export const contact = async (data: ContactFormBody): Promise<contacts> => {
	const validData = ContactFormBodySchema.safeParse(data);

	if (!validData.success) {
		throw new Error(fromZodError(validData.error).message);
	}

	try {
		const response = await prisma.contacts.create({
			data: validData.data,
		});

		return response;
	} catch (error: unknown) {
		if (error instanceof Error) throw error;
		throw new Error("Error saving message");
	}
};

import type { contacts } from "@bpvs/db";
import { prisma } from "@bpvs/db";
import type { NextRequest } from "next/server";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export interface ContactFormBody {
	name: string;
	email: string;
	message: string;
}

const ContactFormBodySchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email"),
	message: z.string().min(2, "Message must be at least 2 characters"),
});

const contact = async (data: ContactFormBody): Promise<contacts> => {
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

export const POST = async (req: NextRequest) => {
	const data = ContactFormBodySchema.safeParse(req.body);
	if (!data.success) {
		return new Response(fromZodError(data.error).message, { status: 400 });
	}

	try {
		const response = await contact(data.data);
		return Response.json(response);
	} catch (error: unknown) {
		console.error(error);
		return new Response(
			JSON.stringify({
				message: "There was an error saving the contact to the database.",
			}),
			{ status: 500 }
		);
	}
};

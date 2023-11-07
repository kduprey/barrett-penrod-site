import type { NextRequest } from "next/server";
import { fromZodError } from "zod-validation-error";
import { ContactFormBodySchema, contact } from "./contact";

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

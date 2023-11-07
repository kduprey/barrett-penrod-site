import type { NextRequest } from "next/server";
import { z } from "zod";
import { createCheckoutSession } from "./createCheckoutSession";

const POSTCheckoutBody = z.object({
	service: z.coerce.number(),
	location: z.coerce.number(),
	eventURI: z.string(),
	inviteeURI: z.string(),
	bundle: z.coerce.number().optional(),
	isLonger: z.boolean().optional(),
});

export const POST = async (req: NextRequest) => {
	const data = POSTCheckoutBody.parse(req.body);
	const origin = z.string().parse(req.headers.get("origin"));
	try {
		// Create checkout session
		const session = await createCheckoutSession({ ...data, origin });

		return Response.json({ url: session.url, id: session.id });
	} catch (e: unknown) {
		console.error(e);
		return new Response(
			JSON.stringify({
				message: "There was an error creating the checkout session.",
			}),
			{ status: 500 }
		);
	}
};

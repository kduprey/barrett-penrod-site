import { trytm } from "@bdsqqq/try";
import { createCalendlyWebhook } from "@bpvs/utils";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export const POST = async (req: NextRequest) => {
	const url = z
		.object({
			url: z.string().url(),
		})
		.safeParse(req.body);

	if (!url.success)
		return new Response(fromZodError(url.error).message, {
			status: 400,
		});

	const [webhookRes, webhookErr] = await trytm(
		createCalendlyWebhook(url.data.url)
	);

	if (webhookErr) {
		console.error("Error creating webhook", webhookErr);
		return new NextResponse("Error creating webhook", { status: 500 });
	}

	return NextResponse.json(webhookRes, {
		status: 200,
	});
};

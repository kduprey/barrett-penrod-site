import { Webhook } from "svix";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import type { WebhookEvent } from "@clerk/nextjs/server";

export const POST = async (req: NextRequest) => {
	const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

	if (!WEBHOOK_SECRET)
		return new NextResponse("Webhook secret not set", {
			status: 500,
		});

	const headerPayload = headers();
	const svixId = headerPayload.get("svix-id");
	const svixSignature = headerPayload.get("svix-signature");
	const svixTimestamp = headerPayload.get("svix-timestamp");

	if (!svixId || !svixSignature || !svixTimestamp)
		return new NextResponse("Missing webhook headers", {
			status: 400,
		});

	const payload = await req.json();
	const body = JSON.stringify(payload);

	const wh = new Webhook(WEBHOOK_SECRET);

	let event: WebhookEvent;

	try {
		event = wh.verify(body, {
			"svix-id": svixId,
			"svix-signature": svixSignature,
			"svix-timestamp": svixTimestamp,
		}) as WebhookEvent;
	} catch (error) {
		console.error("Invalid webhook signature", error);
		return new NextResponse("Invalid webhook signature", {
			status: 400,
		});
	}.

	const { id } = event.data;
	const eventType = event.type;

	console.info(`Received ${eventType} webhook for ${id}`);
	console.info("Webhook payload:", body);

	return new NextResponse(undefined, {
		status: 201,
	});
};

import { trytm } from "@bdsqqq/try";
import { calendlyConfigParams, calendlyWebhookApi } from "@bpvs/config";
import type {
	CalendlyGetWebhook,
	CalendlyPostWebhook,
	CalendlyWebhook,
} from "@bpvs/types";
import { dev } from "@bpvs/types";
import type { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Create a webhook for Calendly
 * @param url - The URL to send the webhook to
 * @returns The webhook that was created
 * @throws Error if the webhook could not be created
 */
const createWebhook = async (url: string): Promise<CalendlyWebhook> => {
	// Check if in development
	if (!dev) throw new Error("Not allowed in production");

	// Check if the URL is valid
	if (!url || url === "") throw new Error("Invalid URL");

	// Get all current webhooks
	const [webhookRes, webhookErr] = await trytm(
		calendlyWebhookApi.get<CalendlyGetWebhook>("")
	);

	if (webhookErr) {
		console.error("Error getting webhooks", webhookErr);
		throw new Error("Error getting webhooks");
	}

	// Check if testing webhook already exists
	const oldWebhookURI = webhookRes.data.collection.find((webhook) =>
		webhook.callback_url.includes("ngrok") ? webhook : null
	)?.uri;

	// Remove old webhook
	if (oldWebhookURI) {
		const [deleteWebhookRes, deleteWebhookErr] = await trytm(
			calendlyWebhookApi.delete(oldWebhookURI)
		);

		if (deleteWebhookErr) {
			console.error("Error deleting old webhook", deleteWebhookErr);
			throw new Error("Error deleting old webhook");
		}

		if (deleteWebhookRes.status === 204)
			console.info("Old webhook deleted", oldWebhookURI);
		else console.warn("Old webhook not deleted", oldWebhookURI);
	} else console.warn("No old webhook to delete");

	// Create new webhook
	const [createWebhookRes, createWebhookErr] = await trytm(
		calendlyWebhookApi.post<CalendlyPostWebhook>("", {
			url: `${url}/api/webhooks/calendly`,
			events: ["invitee.created", "invitee.canceled"],
			organization: calendlyConfigParams.organization,
			scope: "organization",
			signing_key: process.env.CALENDLY_WEBHOOK_SIGNING_KEY,
		})
	);

	if (createWebhookErr) {
		console.error("Error creating webhook", createWebhookErr);
		throw new Error("Error creating webhook");
	}

	console.info("New webhook created", createWebhookRes);
	return createWebhookRes.data.resource;
};

export { createWebhook };

export const POST = async (req: NextApiRequest): Promise<NextResponse> => {
	const url = z
		.object({
			url: z.string().url(),
		})
		.parse(req.body).url;

	const [webhookRes, webhookErr] = await trytm(createWebhook(url));

	if (webhookErr) {
		console.error("Error creating webhook", webhookErr);
		return new NextResponse("Error creating webhook", { status: 500 });
	}

	return NextResponse.json(webhookRes, {
		status: 200,
	});
};

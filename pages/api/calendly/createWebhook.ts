import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { dev } from "../../../config";
import { calendlyWebhooks } from "../../../data/calendlyWebhooks";
import {
	CalendlyGetWebhook,
	CalendlyPostWebhook,
	CalendlyWebhook,
} from "../../../types/calendlyTypes";
import { invalidMethod } from "../../../utils/responseDefaults";

/**
 * Create a webhook for Calendly
 * @param url The URL to send the webhook to
 * @returns The webhook that was created
 * @throws Error if the webhook could not be created
 */
const createWebhook = async (
	url: string
): Promise<CalendlyWebhook | string> => {
	if (!dev) return "Not Allowed";

	const organization =
		"https://api.calendly.com/organizations/ac748a68-67c0-4e4a-b0d8-4bd791a831ac";
	let webhooks: CalendlyWebhook[] = [];

	// Get all current webhooks
	try {
		const { data } = await axios.get<CalendlyGetWebhook>(
			"https://api.calendly.com/webhook_subscriptions",
			{
				headers: {
					Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
				},
				params: {
					organization,
					scope: "organization",
				},
			}
		);
		webhooks = data.collection;
	} catch (err) {
		console.error(err);
		console.error("Error getting webhooks");
	}

	// Check if testing webhook already exists
	const oldWebhookURI = webhooks.find((e) => {
		return e.callback_url.includes("ngrok") ? e : null;
	})?.uri;

	// Remove old webhook
	try {
		if (oldWebhookURI)
			console.log((await axios.delete(oldWebhookURI)).data);
		else console.info("No old webhook to delete");
	} catch (error) {
		console.error(error);
	}

	// Create new webhook
	try {
		const {
			data: { resource: webhook },
		} = await axios.post<CalendlyPostWebhook>(
			"https://api.calendly.com/webhook_subscriptions",
			{
				url,
				events: ["invitee.created", "invitee.canceled"],
				organization,
				scope: "organization",
				signing_key: process.env["CALENDLY_WEBHOOK_SIGNING_KEY"],
			},
			{
				headers: {
					Authorization: `Bearer ${process.env["CALENDLY_API_KEY"]}`,
				},
			}
		);

		console.info("New webhook created", webhook);
		return webhook;
	} catch (error) {
		console.error(error);
		return "Error creating webhook";
	}
};

export { createWebhook };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { url } = req.body as { url: string };
	if (!url || typeof url !== "string") {
		res.status(400).json({ message: "Missing url" });
		return;
	}

	if (!dev) res.status(400).json({ message: "Not Allowed" });

	invalidMethod("POST", req, res);

	try {
		const webhook = await createWebhook(url);
		res.status(200).json(webhook);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Error creating webhook" });
	}
};

export default handler;

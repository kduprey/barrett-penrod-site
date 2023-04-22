import sendgridClient from "@sendgrid/mail";
import Stripe from "stripe";
import { dev } from "./dev";

export const db = dev ? "test" : "production";

export const stripeMode = dev ? "test" : "live";

export const stripeWebhookSecret = process.env["STRIPE_WEBHOOK_SECRET"];

if (dev) {
	sendgridClient.setApiKey(process.env.SENDGRID_DEV_API_KEY as string);
} else {
	sendgridClient.setApiKey(process.env.SENDGRID_API_KEY as string);
}
export const sendgrid = sendgridClient;

export * from "./hygraphCMS";
export * from "./server";

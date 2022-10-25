import Stripe from "stripe";

const dev = process.env.VERCEL_ENV !== "production";

export const server = dev
	? "http://localhost:3000"
	: "https://barrettpenrod.com";

export const db = dev ? "test" : "production";

export const stripeMode = dev ? "test" : "live";

export const dbURL = process.env["PRODUCTION_DB_URL"];

export const stripe = new Stripe(
	process.env.VERCEL_ENV === "production"
		? `${process.env["STRIPE_SECRET_KEY"]}`
		: `${process.env["STRIPE_TEST_SECRET_KEY"]}`,
	{
		apiVersion: "2022-08-01",
	}
);

export const stripeWebhookSecret = dev
	? process.env["STRIPE_TEST_WEBHOOK_SECRET"]
	: process.env["STRIPE_WEBHOOK_SECRET"];

import sendgridClient from "@sendgrid/mail";
if (process.env.VERCEL_ENV === "production") {
	sendgridClient.setApiKey(process.env["SENDGRID_API_KEY"] as string);
} else {
	sendgridClient.setApiKey(process.env["SENDGRID_DEV_API_KEY"] as string);
}
export const sendgrid = sendgridClient;

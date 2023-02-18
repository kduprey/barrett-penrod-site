import { PrismaClientOptions } from "@prisma/client/runtime";
import sendgridClient from "@sendgrid/mail";
import Stripe from "stripe";

export const dev = process.env.VERCEL_ENV !== "production";

export const server = dev
	? "https://4a70-72-132-95-70.ngrok.io"
	: "https://barrettpenrod.com";

export const db = dev ? "test" : "production";

export const stripeMode = dev ? "test" : "live";

export const dbURL = process.env["PRODUCTION_DB_URL"];
``;
export const stripe = new Stripe(
	process.env.VERCEL_ENV === "production"
		? `${process.env["STRIPE_SECRET_KEY"]}`
		: `${process.env["STRIPE_TEST_SECRET_KEY"]}`,
	{
		apiVersion: "2022-11-15",
	}
);

export const stripeWebhookSecret = dev
	? process.env["STRIPE_TEST_WEBHOOK_SECRET"]
	: process.env["STRIPE_WEBHOOK_SECRET"];

if (dev) {
	sendgridClient.setApiKey(process.env["SENDGRID_DEV_API_KEY"] as string);
} else {
	sendgridClient.setApiKey(process.env["SENDGRID_API_KEY"] as string);
}
export const sendgrid = sendgridClient;

export const prismaConfig =
	dev && !process.env.TEST_ENV
		? {
				log: [
					"query",
					"info",
					"warn",
					"error",
				] as PrismaClientOptions["log"],
				errorFormat: "pretty" as PrismaClientOptions["errorFormat"],
		  }
		: {
				log: [
					"query",
					"info",
					"warn",
					"error",
				] as PrismaClientOptions["log"],
				errorFormat: "minimal" as PrismaClientOptions["errorFormat"],
		  };

export { hygraphcms } from "./hygraphCMS";

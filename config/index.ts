import { PrismaClientOptions } from "@prisma/client/runtime/library";
import sendgridClient from "@sendgrid/mail";
import Stripe from "stripe";
import { dev } from "./dev";

export const db = dev ? "test" : "production";

export const stripeMode = dev ? "test" : "live";

export const stripe = new Stripe(
	!dev
		? `${process.env.STRIPE_SECRET_KEY}`
		: `${process.env.STRIPE_TEST_SECRET_KEY}`,
	{
		apiVersion: "2022-11-15",
		typescript: true,
		appInfo: {
			name: "Booking Site",
			url: "https://barrettpendrod.com/bookings",
		},
	}
);

export const stripeWebhookSecret = process.env["STRIPE_WEBHOOK_SECRET"];

if (dev) {
	sendgridClient.setApiKey(process.env.SENDGRID_DEV_API_KEY as string);
} else {
	sendgridClient.setApiKey(process.env.SENDGRID_API_KEY as string);
}
export const sendgrid = sendgridClient;

export const prismaConfig =
	dev && !process.env.TEST_ENV
		? {
				log: ["query", "info", "warn", "error"] as PrismaClientOptions["log"],
				errorFormat: "pretty" as PrismaClientOptions["errorFormat"],
		  }
		: {
				log: ["query", "info", "warn", "error"] as PrismaClientOptions["log"],
				errorFormat: "minimal" as PrismaClientOptions["errorFormat"],
		  };
export * from "./dev";
export * from "./hygraphCMS";
export * from "./server";

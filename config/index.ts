import Stripe from "stripe";
const sendgridClient = require("@sendgrid/mail");

const dev = process.env.NODE_ENV !== "production";

export const server = dev
	? "https://d3c5-108-27-247-65.ngrok.io"
	: "https://barrettpenrod.com";

export const db = dev ? "test" : "production";

export const stripeMode = dev ? "test" : "live";

export const dbURL = dev
	? "mongodb://localhost:27017"
	: process.env.PRODUCTION_DB_URL;

export const stripe = new Stripe(
	process.env.NODE_ENV === "production"
		? `${process.env.STRIPE_SECRET_KEY}`
		: `${process.env.STRIPE_TEST_SECRET_KEY}`,
	{
		// @ts-ignore
		apiVersion: null,
	}
);

if (process.env.NODE_ENV === "production") {
	sendgridClient.setApiKey(process.env.SENDGRID_API_KEY);
} else {
	sendgridClient.setApiKey(process.env.SENDGRID_DEV_API_KEY);
}
export const sendgrid = sendgridClient;

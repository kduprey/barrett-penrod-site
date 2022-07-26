import Stripe from "stripe";

const dev = process.env.NODE_ENV !== "production";

export const server = dev
	? "https://fda3-185-236-186-94.eu.ngrok.io/"
	: "https://barrettpenrod.com";

export const db = dev ? "test" : "production";

export const stripeMode = dev ? "test" : "live";

export const dbURL = process.env.PRODUCTION_DB_URL;

export const stripe = new Stripe(
	process.env.NODE_ENV === "production"
		? `${process.env.STRIPE_SECRET_KEY}`
		: `${process.env.STRIPE_TEST_SECRET_KEY}`,
	{
		// @ts-ignore
		apiVersion: null,
	}
);

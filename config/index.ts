import Stripe from "stripe";

const dev = process.env.NODE_ENV !== "production";

export const server = dev
	? "https://3fb9-2601-180-c200-c710-e1ff-7424-83ff-1b1e.ngrok.io"
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

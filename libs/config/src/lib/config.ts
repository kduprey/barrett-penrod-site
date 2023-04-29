import { dev } from "@bpvs/types";
import { GraphQLClient } from "graphql-request";
import Stripe from "stripe";

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

export const server = dev
	? "https://ad14-2600-4040-9a9b-9200-2582-1bd4-300-a0fb.ngrok.io"
	: "https://barrettpenrod.com";

export const stripeMode = dev ? "test" : "live";

export const db = dev ? "test" : "production";

export const hygraphcms: GraphQLClient = new GraphQLClient(
	"https://api-us-east-1.hygraph.com/v2/cl7ep7a6t60k301ul5b4o8j9h/master",
	{
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_API_KEY}`,
		},
	}
);

import { dev } from "@bpvs/types";
import Stripe from "stripe";

export const stripe = new Stripe(
	!dev
		? `${process.env.STRIPE_SECRET_KEY}`
		: `${process.env.STRIPE_TEST_SECRET_KEY}`,
	{
		apiVersion: "2023-10-16",
		typescript: true,
		appInfo: {
			name: "Booking Site",
			url: "https://barrettpendrod.com/bookings",
		},
	}
);

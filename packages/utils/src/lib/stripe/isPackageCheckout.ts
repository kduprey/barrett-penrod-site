import { stripe } from "@bpvs/libs";
import Stripe from "stripe";

export const isPackageCheckout = async (
	session: Stripe.Checkout.Session
): Promise<boolean> => {
	const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
	const packageRegex = new RegExp(/Package$/, "i");

	return lineItems.data
		.map((item) => item.description)
		.some((desc) => packageRegex.test(desc));
};

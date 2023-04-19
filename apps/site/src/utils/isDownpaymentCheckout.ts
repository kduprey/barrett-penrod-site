import { stripe } from "config/index";
import Stripe from "stripe";

const isDownpaymentCheckout = async (
	session: Stripe.Checkout.Session
): Promise<boolean> => {
	const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
	const downpaymentRegex = new RegExp(/Downpayment$/, "i");

	return lineItems.data
		.map((item) => item.description)
		.some((desc) => downpaymentRegex.test(desc));
};

export default isDownpaymentCheckout;

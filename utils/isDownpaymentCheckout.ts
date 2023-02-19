import Stripe from "stripe";
import { stripe } from "../config";

const isDownpaymentCheckout = async (
	session: Stripe.Checkout.Session
): Promise<boolean> => {
	const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
	const downpaymentRegex = new RegExp(/Downpayment$/i);

	return lineItems.data
		.map((item) => item.description)
		.some((desc) => downpaymentRegex.test(desc));
};

export default isDownpaymentCheckout;

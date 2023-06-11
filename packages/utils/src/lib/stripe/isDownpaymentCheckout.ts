import Stripe from "stripe";

export const isDownpaymentCheckout = (
	lineItems: Stripe.LineItem[]
): boolean => {
	const downpaymentRegex = new RegExp(/Downpayment$/, "i");

	return lineItems
		.map((item) => item.description)
		.some((desc) => downpaymentRegex.test(desc));
};

import Stripe from "stripe";

export const isPackageCheckout = (lineItems: Stripe.LineItem[]): boolean => {
	const packageRegex = new RegExp(/Package$/, "i");

	return lineItems
		.map((item) => item.description)
		.some((desc) => packageRegex.test(desc));
};

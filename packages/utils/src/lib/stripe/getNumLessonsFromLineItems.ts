import type Stripe from "stripe";

export const getNumLessonsFromLineItems = (
	lineItems: Stripe.LineItem[]
): number => {
	const digitRegex = new RegExp(/^\d{0,2}/);
	const downpaymentRegex = new RegExp(/downpayment$/i);

	const numLessons = lineItems.reduce((acc, item) => {
		const num = Number(digitRegex.exec(item.description)?.[0]);
		const numDownpayments = downpaymentRegex.exec(item.description) ? 1 : 0;

		return acc + num + numDownpayments;
	}, 0);

	return numLessons;
};

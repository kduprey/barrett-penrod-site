import Stripe from "stripe";

export const getNumLessonsFromLineItems = (
	lineItems: Stripe.LineItem[]
): number => {
	const digitRegex = new RegExp(/^\d{0,2}/);
	const downpaymentRegex = new RegExp(/downpayment$/i);

	const numLessons = lineItems.reduce((acc, item) => {
		const num = Number(item.description.match(digitRegex)?.[0]);
		const numDownpayments = item.description.match(downpaymentRegex) ? 1 : 0;

		return acc + num + numDownpayments;
	}, 0);

	return numLessons;
};

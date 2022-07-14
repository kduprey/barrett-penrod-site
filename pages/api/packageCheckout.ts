import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { server, stripeMode } from "../../config";

type Data = {
	name: string;
};

const packageCheckout = async (
	req: NextApiRequest,
	res: NextApiResponse<Data>
) => {
	const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY as string, {
		// @ts-ignore
		apiVersion: null,
	});

	const prices: {
		[key: string]: {
			test: string;
			live: string;
		};
	} = {
		4: {
			live: "price_1LLKHdAMm0G1mbCtVZ9UmBPv",
			test: "price_1LLKKfAMm0G1mbCtsNQnB6jW",
		},
		6: {
			live: "price_1LLKIlAMm0G1mbCtcZ3PDgqq",
			test: "price_1LLKKtAMm0G1mbCtRGAQOxp7",
		},
		8: {
			live: "price_1LLKJAAMm0G1mbCtcijAzVhU",
			test: "price_1LLKLAAMm0G1mbCt2zHaZ8BU",
		},
		12: {
			live: "price_1LLKJMAMm0G1mbCtSUld32rj",
			test: "price_1LLKLLAMm0G1mbCtE0ubYKM2",
		},
	};

	const { numPackage } = req.query;

	let sessionTemplate: Stripe.Checkout.SessionCreateParams = {
		success_url: req.query.successURL as string,
		cancel_url: `${server}/bookings/cancel?session_id={CHECKOUT_SESSION_ID}`,
		line_items: [
			{
				price: prices[numPackage as string][stripeMode],
				quantity: 1,
			},
		],
		mode: "payment",
		automatic_tax: {
			enabled: true,
		},
		phone_number_collection: {
			enabled: true,
		},
		payment_intent_data: {
			setup_future_usage: "on_session",
		},
		allow_promotion_codes: true,
		submit_type: "book",
		expires_at: Math.floor(new Date(Date.now() + 3600000).getTime() / 1000),
		after_expiration: {
			recovery: {
				enabled: true,
				allow_promotion_codes: true,
			},
		},
		customer_creation: "always",
	};

	try {
		const session = await stripe.checkout.sessions.create(sessionTemplate);

		res.redirect(303, session.url || `${server}/404`);
	} catch (error: any) {
		console.error(error);
		res.redirect(303, `${server}/404?error=${error.message}`);
	}
};

export default packageCheckout;

import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { URLSearchParams } from "url";
import { server } from "../../config/index";
import { BookingInfo, ClientInfo } from "../../types";

type Data = {
	res: string;
};

const checkout = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
		// @ts-ignore
		apiVersion: null,
	});

	const queryString: string = new URLSearchParams(
		req.query as any
	).toString();

	// If event_type is "Consultation Session", then add booking to db and redirect to success page
	if (req.query.event_type_name === "Consultation Session") {
		// Add or update customer in database

		const response = await fetch(`${server}/api/db/bookings`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...req.query,
			}),
		});
		console.log(response);

		res.redirect(303, `${server}/bookings/success?${queryString}`).end();
		return;
	}

	const prices = {
		svsSession: {
			test: "price_1LDhdeAMm0G1mbCt3nyv52uI",
			live: "price_1LDhS8AMm0G1mbCtVVMPsJiS",
		},
		otherLessons: {
			test: "price_1LDhdeAMm0G1mbCtGFA3BJEJ",
			live: "price_1L88w7AMm0G1mbCt5xei9unc",
		},
	};

	let sessionTemplate: Stripe.Checkout.SessionCreateParams = {
		success_url: `${server}/bookings/success?session_id={CHECKOUT_SESSION_ID}&${queryString}`,
		cancel_url: `${server}/bookings/cancel?session_id={CHECKOUT_SESSION_ID}&${queryString}`,
		line_items: [
			{
				price: req.query.event_type_name?.includes("SVS Session")
					? prices.svsSession.live
					: prices.otherLessons.live,
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
	};

	try {
		const customerSearch = await stripe.customers.search({
			query: `email:"${req.query.invitee_email}" OR name~"${req.query.invitee_full_name}"`,
		});

		if (customerSearch.data.length > 0) {
			sessionTemplate.customer = customerSearch.data[0].id;
		} else {
			sessionTemplate.customer_email = `${req.query.invitee_email}`;
			sessionTemplate.customer_creation = "always";
		}
		const session = await stripe.checkout.sessions.create(sessionTemplate);

		// Add or update customer in database

		console.log(session);

		const response = await fetch(`${server}/api/bookings`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...req.query,
				session_id: session.id,
			}),
		});

		console.log(response);

		res.redirect(303, session.url || `${server}/404`);
	} catch (e: any) {
		console.error(e);
		res.redirect(303, `${server}/404?error=${e.message}`);
	}
};

export default checkout;

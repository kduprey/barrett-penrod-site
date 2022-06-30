import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { server } from "../../config/index";

type Data = {
	res: string;
};

const checkout = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const stripe = new Stripe(`${process.env.STRIPE_TEST_SECRET_KEY}`, {
		apiVersion: "2020-08-27",
	});

	const statuses = {
		guestEmailsSent: {
			status: false,
			message: null as any,
		},
		firstTimeEmailSent: {
			status: false,
			message: null as any,
		},
	};

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
		success_url: `${server}/bookings/success?session_id={CHECKOUT_SESSION_ID}&event_start_time=${req.query.event_start_time}&event_end_time=${req.query.event_end_time}&event_type_name=${req.query.event_type_name}`,
		cancel_url: `${server}/bookings/cancel?session_id={CHECKOUT_SESSION_ID}&event_start_time=${req.query.event_start_time}&event_end_time=${req.query.event_end_time}&event_type_name=${req.query.event_type_name}`,
		line_items: [
			{
				price: req.query.event_type_name.includes("SVS Session")
					? prices.svsSession.test
					: prices.otherLessons.test,
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

	if (req.query.guests) {
		try {
			const response = await fetch(`${server}/api/bookings/guest`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					session_id: req.query.session_id,
					guests: req.query.guests,
					eventStartTime: req.query.event_start_time,
					eventEndTime: req.query.event_end_time,
					eventTypeName: req.query.event_type_name,
				}),
			});
			statuses.guestEmailsSent.status = true;
			statuses.guestEmailsSent.message = await response.body;
		} catch (err: any) {
			console.log(err);
			statuses.guestEmailsSent.status = false;
			statuses.guestEmailsSent.message = err;
		}
	}

	// Is this a first time booking?

	if (req.query.answer_2 === "Yes") {
		sessionTemplate.success_url = `${server}/bookings/success?session_id={CHECKOUT_SESSION_ID}&first_time=true`;
		try {
			const response = await fetch(`${server}/api/bookings/first-time`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					session_id: req.query.session_id,
					invitee_email: req.query.invitee_email,
					invitee_full_name: req.query.invitee_full_name,
					eventStartTime: req.query.event_start_time,
					eventEndTime: req.query.event_end_time,
					eventTypeName: req.query.event_type_name,
				}),
			});
			statuses.firstTimeEmailSent.status = true;
			statuses.firstTimeEmailSent.message = await response.body;
		} catch (err: any) {
			console.log(err);
			statuses.firstTimeEmailSent.status = false;
			statuses.firstTimeEmailSent.message = err;
		}
	}

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

		res.redirect(303, session.url || `${server}/404`);
	} catch (e: any) {
		console.error(e);
		res.redirect(303, `${server}/404?error=${e.message}`);
	}
};

export default checkout;

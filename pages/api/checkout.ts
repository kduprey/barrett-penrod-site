import type { NextApiRequest, NextApiResponse } from "next";
import { stripe, server, stripeMode } from "../../config/index";
import Stripe from "stripe";
import { Guest } from "../../types";
import { bundles, Prices } from "../../data/services";

type Data = {
	url?: string;
	error?: string;
};

type Body = {
	service: number;
	location: number;
	bundle?: number;
	email: string;
	name: string;
	eventTime: string;
	firstTime: boolean;
	guests: string[];
};

const checkout = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const {
		service,
		location,
		bundle,
		email,
		name,
		eventTime,
		firstTime,
		guests,
	}: Body = req.body.data;

	console.log(email);

	let guestsObj: Guest[] = [];
	if (guests)
		guestsObj = guests.map((guest: string) => ({
			email: guest,
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
		}));

	let line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

	// if is a bundle purchase, add the bundle to the line items
	if (bundle) {
		line_items.push(bundles[bundle].priceID[stripeMode]);
	} else {
		// if SVS Session, add the downpayment for SVS Session
		if (service == 2) {
			line_items.push(Prices[0].priceID[stripeMode]);
		} else {
			// if not SVS Session, add the regular downpayment
			line_items.push(Prices[1].priceID[stripeMode]);
		}
	}

	// if location is Open Jar, add the Open Jar booking fee
	if (location == 1) {
		line_items.push(Prices[2].priceID[stripeMode]);
	}

	// Create success url
	const successURL: URL = new URL(server + "/bookings/success");
	// Add the event time to the success url
	successURL.searchParams.append("eventTime", new Date(eventTime).toString());
	// Add the service to the success url
	successURL.searchParams.append("service", Number(service).toString());
	// Add the location to the success url
	successURL.searchParams.append("location", Number(location).toString());
	// Add the bundle to the success url, if it exists
	if (bundle)
		successURL.searchParams.append("bundle", Number(bundle).toString());
	// Add isFirstTime to the success url
	successURL.searchParams.append("firstTime", Boolean(firstTime).toString());
	// If there are guests, add them to the success url
	if (guestsObj.length > 0) {
		successURL.searchParams.append("guests", JSON.stringify(guests));
	}

	// Create cancel url
	const cancelURL: URL = new URL(server + "/bookings/cancel");
	// Add the event time to the cancel url
	cancelURL.searchParams.append("eventTime", new Date(eventTime).toString());
	// Add the service to the cancel url
	cancelURL.searchParams.append("service", Number(service).toString());
	// Add the location to the cancel url
	cancelURL.searchParams.append("location", Number(location).toString());
	// Add the bundle to the cancel url, if it exists
	if (bundle)
		cancelURL.searchParams.append("bundle", Number(bundle).toString());
	// Add isFirstTime to the cancel url
	cancelURL.searchParams.append("firstTime", Boolean(firstTime).toString());
	// If there are guests, add them to the cancel url
	if (guestsObj.length > 0) {
		cancelURL.searchParams.append("guests", JSON.stringify(guestsObj));
	}

	// Create the Checkout Session Template
	let sessionTemplate: Stripe.Checkout.SessionCreateParams = {
		success_url: successURL.href + "&session_id={CHECKOUT_SESSION_ID}",
		cancel_url: cancelURL.href + "&session_id={CHECKOUT_SESSION_ID}",
		mode: "payment",
		automatic_tax: {
			enabled: true,
		},
		phone_number_collection: {
			enabled: true,
		},
		payment_intent_data: {
			setup_future_usage: "off_session",
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

	// Look for a customer with the email address or name in Stripe and create one if it doesn't exist
	try {
		// Check if user is previous client
		const customerSearch = await stripe.customers.search({
			query: `email:"${email}" OR name~"${name}"`,
		});

		if (customerSearch.data.length > 0) {
			// If user is previous client, use that customer id for checkout session
			sessionTemplate.customer = customerSearch.data[0].id;
		} else {
			// If user is new client, set session to use email from booking and create customer
			sessionTemplate.customer_email = `${email}`;
			sessionTemplate.customer_creation = "always";
		}
	} catch (err) {
		console.log(err);
		// If error finding client, set session to use email from booking and create customer
		sessionTemplate.customer_email = `${email}`;
		sessionTemplate.customer_creation = "always";
	}

	try {
		sessionTemplate.line_items = line_items;
		// Create checkout session
		const session = await stripe.checkout.sessions.create(sessionTemplate);

		session.url
			? res.status(200).json({ url: session.url })
			: res
					.status(404)
					.json({ error: "Error creating checkout session" });
	} catch (e: any) {
		console.error(e);
		res.status(404).json({ error: e.message });
	}
};

export default checkout;

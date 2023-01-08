import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { server, stripe, stripeMode } from "../../config/index";
import { bundles, Prices } from "../../data/services";
import { invalidMethod } from "../../utils/responseDefaults";
import { getEventInvitee } from "./calendly/getEventInvitee";

type Body = {
	service: number;
	location: number;
	bundle?: number;
	eventURI: string;
	inviteeURI: string;
	isLonger?: boolean;
};

const createCheckoutSession = async ({
	service,
	location,
	bundle,
	eventURI,
	inviteeURI,
	isLonger,
}: Body): Promise<{
	url?: string;
	error?: any;
}> => {
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

	// Create cancel url
	const cancelURL: URL = new URL(server + "/bookings/cancel");

	// Create the Checkout Session Template
	let sessionTemplate: Stripe.Checkout.SessionCreateParams = {
		success_url: successURL.href + "?session_id={CHECKOUT_SESSION_ID}",
		cancel_url: cancelURL.href + "?session_id={CHECKOUT_SESSION_ID}",
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
		expires_at: isLonger
			? Math.floor(new Date(Date.now() + 86400000).getTime() / 1000)
			: Math.floor(new Date(Date.now() + 3600000).getTime() / 1000),
		after_expiration: {
			recovery: {
				enabled: true,
				allow_promotion_codes: true,
			},
		},
		billing_address_collection: "required",
		client_reference_id: eventURI,
		metadata: {
			inviteeURI: inviteeURI,
		},
	};

	// Get the event invitee info
	const { data: inviteeInfo } = await getEventInvitee(inviteeURI);

	// Look for a customer with the email address or name in Stripe and create one if it doesn't exist
	try {
		// Check if user is previous client
		const customerSearch = await stripe.customers.search({
			query: `email:"${inviteeInfo.resource.email}" OR name~"${inviteeInfo.resource.name}"`,
		});

		if (customerSearch.data.length > 0) {
			// If user is previous client, use that customer id for checkout session
			sessionTemplate.customer = customerSearch.data[0].id;
			sessionTemplate.customer_update = {
				address: "auto",
			};
		} else {
			// If user is new client, set session to use email from booking and create customer
			sessionTemplate.customer_email = `${inviteeInfo.resource.email}`;
			sessionTemplate.customer_creation = "always";
		}
	} catch (err) {
		console.log(err);
		// If error finding client, set session to use email from booking and create customer
		sessionTemplate.customer_email = `${inviteeInfo.resource.email}`;
		sessionTemplate.customer_creation = "always";
	}

	try {
		sessionTemplate.line_items = line_items;
		// Create checkout session
		const session = await stripe.checkout.sessions.create(sessionTemplate);

		if (session.url)
			// Return the session URL
			return { url: session.url };
		// If no session URL, return error
		else return { error: "Error creating checkout session" };
	} catch (e: any) {
		console.error(e);
		return { error: e.message };
	}
};

export { createCheckoutSession };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	// Check for POST request
	invalidMethod("POST", req, res);

	const { service, location, bundle, eventURI, inviteeURI } = req.body;

	// Check for required fields
	if (!service || !location || !eventURI || !inviteeURI) {
		res.status(400).json({ error: "Missing required fields" });
		return;
	}

	try {
		// Create checkout session
		const session = await createCheckoutSession(req.body as Body);
		if (!session.error) res.status(200).json({ url: session.url });
		else res.status(404).json({ error: "Error creating checkout session" });
	} catch (e: any) {
		console.error(e);
		res.status(404).json({ error: e.message });
	}
};

export default handler;

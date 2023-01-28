import createHttpError from "http-errors";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import apiHandler from "utils/api";
import { validateRequest } from "utils/yup";
import * as yup from "yup";
import { server, stripe, stripeMode } from "../../config/index";
import { bundles, Prices, services } from "../../data/services";
import { getEventInvitee } from "./calendly/eventInvitee";

interface CheckoutParams {
	service: number;
	location: number;
	bundle?: number;
	eventURI: string;
	inviteeURI: string;
	isLonger?: boolean;
}

const createCheckoutSession = async (
	params: CheckoutParams
): Promise<{
	url: string;
	id: string;
}> => {
	let line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

	// Check if eventURI is valid
	if (params.eventURI === undefined || params.eventURI === "")
		throw new Error("Invalid eventURI");

	// Check if inviteeURI is valid
	if (params.inviteeURI === undefined || params.inviteeURI === "")
		throw new Error("Invalid inviteeURI");

	// Check if service is valid
	if (services.indexOf(services[params.service]) === -1)
		throw new Error("Invalid service");

	// Check if location is valid, and if it is valid for the service
	if (
		services[params.service].locations.indexOf(
			services[params.service].locations[params.location]
		) === -1
	)
		throw new Error("Invalid location");

	// Check if bundle is valid if it exists
	if (
		params.bundle !== undefined &&
		bundles.indexOf(bundles[params.bundle]) === -1
	)
		throw new Error("Invalid bundle");

	// Check if SVS session type and bundle are both selected
	if (params.service === 2 && params.bundle !== undefined)
		throw new Error("Cannot select bundle for SVS Session");

	// if is a bundle purchase, add the bundle to the line items
	if (params.bundle !== undefined)
		line_items.push(bundles[params.bundle].priceID[stripeMode]);
	// If not a bundle purchase, add lesson downpayment to line items
	// if SVS Session, add the downpayment for SVS Session
	else {
		if (params.service === 2)
			line_items.push(Prices[0].priceID[stripeMode]);
		// if not SVS Session, add the regular downpayment
		else line_items.push(Prices[1].priceID[stripeMode]);
	}

	// if location is Open Jar, add the Open Jar booking fee
	if (params.location === 1) line_items.push(Prices[2].priceID[stripeMode]);

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
		expires_at: params.isLonger
			? Math.floor(new Date(Date.now() + 86400000).getTime() / 1000)
			: Math.floor(new Date(Date.now() + 3600000).getTime() / 1000),
		after_expiration: {
			recovery: {
				enabled: true,
				allow_promotion_codes: true,
			},
		},
		billing_address_collection: "required",
		client_reference_id: params.eventURI,
		metadata: {
			inviteeURI: params.inviteeURI,
		},
	};

	// Look for a customer with the email address or name in Stripe and create one if it doesn't exist
	try {
		// Get the event invitee info to search Stripe
		const inviteeInfo = await getEventInvitee(params.inviteeURI);
		try {
			// Check if user is previous client in Stripe
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
			console.warn(err);
			// If error finding client, set session to use email from booking and create customer
			sessionTemplate.customer_email = `${inviteeInfo.resource.email}`;
			sessionTemplate.customer_creation = "always";
		}
	} catch (err) {
		console.warn(err);
		// If error getting invitee info from Calendly booking, set session to create Customer during session confirmation
		sessionTemplate.customer_creation = "always";
	}

	try {
		sessionTemplate.line_items = line_items;
		// Create checkout session
		const session = await stripe.checkout.sessions.create(sessionTemplate);

		if (session.url)
			// Return the session URL
			return { url: session.url, id: session.id };
		// If no session URL, return error
		else throw new Error("No session URL");
	} catch (e: any) {
		console.error(e);
		throw new Error(e);
	}
};

export { createCheckoutSession };

const POSTCheckoutBody = yup.object().shape({
	service: yup.number().required(),
	location: yup.number().required(),
	bundle: yup.number(),
	eventURI: yup.string().required(),
	inviteeURI: yup.string().required(),
	isLonger: yup.boolean(),
});

const POSTCheckout: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const data = validateRequest(req.body, POSTCheckoutBody);

	try {
		// Create checkout session
		const session = await createCheckoutSession(data);

		res.status(200).json({ url: session.url, id: session.id });
	} catch (e: any) {
		console.error(e);
		throw new createHttpError.InternalServerError(e);
	}
};

export default apiHandler({
	POST: POSTCheckout,
});

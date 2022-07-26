import type { NextApiRequest, NextApiResponse } from "next";
import { stripe, server, stripeMode } from "../../config/index";
import { URLSearchParams } from "url";
import Stripe from "stripe";
import { getCookie, hasCookie } from "cookies-next";
import { LessonPackage, serviceCookieType } from "../../types";

type Data = {
	res: string;
};

const checkout = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const queryString: string = new URLSearchParams(
		req.query as any
	).toString();

	const serviceInfo = getCookie("service", { req, res }) as string;
	const serviceInfoJSON: serviceCookieType = JSON.parse(serviceInfo);

	let line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

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
		openJarFee: {
			test: "price_1LPn53AMm0G1mbCt5MtVjvox",
			live: "price_1LPn4aAMm0G1mbCtwDPP0yWq",
		},
	};

	let sessionTemplate: Stripe.Checkout.SessionCreateParams = {
		success_url: `${server}/bookings/success?session_id={CHECKOUT_SESSION_ID}&${queryString}`,
		cancel_url: `${server}/bookings/cancel?session_id={CHECKOUT_SESSION_ID}&${queryString}`,
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

	const isPackage = getCookie("redirectFromPackageModal", {
		req,
		res,
	}) as boolean;

	if (isPackage && hasCookie("packageInfo", { req, res })) {
		const packageInfo = getCookie("packageInfo", { req, res }) as string;
		const packageInfoJSON: LessonPackage = JSON.parse(packageInfo);

		// If location is Open Jar, add booking fee to checkout total
		if (serviceInfoJSON.locationName === "Open Jar") {
			stripe.prices.retrieve(prices.openJarFee[stripeMode]);

			line_items.push({
				price: prices.openJarFee[stripeMode],
				quantity: 1,
			});
		}
		// Add package to checkout total
		line_items.push({
			price: packageInfoJSON.stripeID[stripeMode],
			quantity: 1,
		});
	} else {
		if (serviceInfoJSON.locationName === "Open Jar") {
			line_items.push({
				price: prices.openJarFee[stripeMode],
				quantity: 1,
			});
		}

		// Add downpayment to checkout total
		// Terminary operation checks if SVS Session, and if so downpayment is $40
		line_items.push({
			price:
				serviceInfoJSON.serviceTitle === "SVS Session"
					? prices.svsSession[stripeMode]
					: prices.otherLessons[stripeMode],
			quantity: 1,
		});
	}

	try {
		// Check if user is previous client
		const customerSearch = await stripe.customers.search({
			query: `email:"${req.query.invitee_email}" OR name~"${req.query.invitee_full_name}"`,
		});

		if (customerSearch.data.length > 0) {
			// If user is previous client, use that customer id for checkout session
			sessionTemplate.customer = customerSearch.data[0].id;
		} else {
			// If user is new client, set session to use email from booking and create customer
			sessionTemplate.customer_email = `${req.query.invitee_email}`;
			sessionTemplate.customer_creation = "always";
		}
	} catch (err) {
		console.log(err);
		// If error finding client, set session to use email from booking and create customer
		sessionTemplate.customer_email = `${req.query.invitee_email}`;
		sessionTemplate.customer_creation = "always";
	}

	try {
		sessionTemplate.line_items = line_items;
		// Create checkout session
		const session = await stripe.checkout.sessions.create(sessionTemplate);

		try {
			// Add or update booking in database
			const response = await fetch(`${server}/api/db/bookings`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...req.query,
					session_id: session.id,
				}),
			});
			console.info(response);
		} catch (err) {
			console.error("Error adding booking to database");
			console.error(err);
		}

		res.redirect(303, session.url || `${server}/404`);
	} catch (e: any) {
		console.error(e);
		res.redirect(303, `${server}/404?error=${e.message}`);
	}
};

export default checkout;

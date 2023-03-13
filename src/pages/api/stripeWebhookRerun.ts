import { trytm } from "@bdsqqq/try";
import { stripe } from "config/index";
import createHttpError from "http-errors";
import prisma from "lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import apiHandler from "utils/api";
import { createCustomer, updateCustomer } from "utils/webhookUtils/stripe";
import { cancelEvent } from "./calendly/cancelEvent";
import { getEventInfo } from "./calendly/eventInfo";
import { getEventInvitee } from "./calendly/eventInvitee";

const rerunCompleted = async (session: Stripe.Checkout.Session) => {
	const [bookingData, bookingDataError] = await trytm(
		getEventInfo(session.client_reference_id as string)
	);
	if (bookingDataError)
		throw new Error("Error getting booking data from Calendly");

	const [inviteeData, inviteeDataError] = await trytm(
		getEventInvitee(session.metadata?.inviteeURI as string)
	);
	if (inviteeDataError)
		throw new Error("Error getting invitee data from Calendly");

	const [line_items, line_itemsError] = await trytm(
		stripe.checkout.sessions.listLineItems(session.id)
	);
	if (line_itemsError)
		throw new Error("Error getting line items from Stripe");

	if (!line_items.data)
		throw new Error("No line items found in Stripe session");

	const customer = session.customer as string;

	// Check database for pre-existing customer
	const existingCustomer = await prisma.clients.findUnique({
		where: {
			stripe_customer_id: customer,
		},
	});

	// If customer exists, update their purchase/booking data
	if (existingCustomer)
		return await updateCustomer(
			session,
			existingCustomer,
			bookingData,
			line_items.data
		);
	// If customer doesn't exist, create a new one
	else
		return await createCustomer(
			inviteeData,
			bookingData,
			session,
			line_items.data
		);
};

export { rerunCompleted };
export { rerunExpired };

const rerunExpired = async (sessionExpired: Stripe.Checkout.Session) => {
	const eventInfo = await getEventInfo(
		sessionExpired.client_reference_id as string
	);
	console.log("Event info", eventInfo);

	// Call cancellation Calendly API endpoint
	const [cancellationResponse, cancellationResponseError] = await trytm(
		cancelEvent(eventInfo.resource.uri)
	);
	if (cancellationResponseError)
		throw new Error("Error cancelling event", cancellationResponseError);

	console.info("Cancelled event", cancellationResponse);

	try {
		const client = await prisma.clients.findUnique({
			where: {
				stripe_customer_id: sessionExpired.customer as string,
			},
		});
		if (!client)
			return res.status(200).send({
				message: "Checkout session expired",
				errors,
			});
	} catch (error) {
		console.error("Error finding client", error);
		errors.push(error);
	}

	// Update client in database respectively
	try {
		const updateClient = await prisma.clients.update({
			where: {
				stripe_customer_id: sessionExpired.customer as string,
			},
			data: {
				nextLesson: null,
			},
		});
		console.info("Updated client", updateClient);
		return res.status(200).send({
			message: "Checkout session expired",
			errors,
		});
	} catch (error) {
		console.error("Error updating client", error);
		errors.push(error);
	}
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	console.log("Stripe webhook rerun");

	console.log(req.body);

	const session = req.body.object as Stripe.Checkout.Session;

	const [rerunResponse, rerunResponseError] = await trytm(
		rerunCompleted(session)
	);

	if (rerunResponseError) {
		console.error(rerunResponseError);

		throw new createHttpError.InternalServerError(
			"Error rerunning webhook"
		);
	}

	return res.status(200).send({
		database: "Database updated",
		rerunResponse,
	});
};

export default apiHandler({
	POST: handler,
});

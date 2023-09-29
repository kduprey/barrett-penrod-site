import { prisma } from "@bpvs/db";
import type Stripe from "stripe";
import { z } from "zod";
import { stripe } from "@bpvs/config";
import { sendCheckoutEmails } from "@bpvs/emails-temp";
import {
	cancelCalendlyEvent,
	createCustomer,
	getCalendlyEvent,
	getCalendlyInvitee,
	updateCustomer,
} from "@bpvs/utils";
import { fromZodError } from "zod-validation-error";
import { trytm } from "@bdsqqq/try";

export const checkoutSessionCompleted = async (
	session: Stripe.Checkout.Session
) => {
	const requiredData = z
		.object({
			client_reference_id: z.string(),
			metadata: z.object({
				inviteeURI: z.string(),
			}),
		})
		.safeParse({
			client_reference_id: session.client_reference_id,
			metadata: session.metadata,
		});

	if (!requiredData.success)
		throw new Error(fromZodError(requiredData.error).message);

	const {
		client_reference_id: bookingURI,
		metadata: { inviteeURI },
	} = requiredData.data;

	const [bookingData, bookingDataErr] = await trytm(
		getCalendlyEvent(bookingURI)
	);
	if (bookingDataErr) throw new Error(bookingDataErr.message);
	const [inviteeData, inviteeDataErr] = await trytm(
		getCalendlyInvitee(inviteeURI)
	);
	if (inviteeDataErr) throw new Error(inviteeDataErr.message);
	const [lineItems, lineItemsErr] = await trytm(
		stripe.checkout.sessions.listLineItems(session.id)
	);
	if (lineItemsErr) throw new Error(lineItemsErr.message);

	console.info("Sending checkout emails...");
	await sendCheckoutEmails(session, lineItems.data);

	console.info("Updating customer data...");

	const [existingCustomer, existingCustomerErr] = await trytm(
		prisma.clients.findUnique({
			where: {
				stripe_customer_id: session.customer as string,
			},
		})
	);

	if (existingCustomerErr) throw new Error(existingCustomerErr.message);

	// If customer exists, update their purchase/booking data
	if (existingCustomer)
		await updateCustomer(
			session,
			existingCustomer,
			bookingData,
			lineItems.data
		);
	else await createCustomer(inviteeData, bookingData, session, lineItems.data);
};

export const checkoutSessionExpired = async (
	session: Stripe.Checkout.Session
) => {
	const requiredData = z
		.object({
			client_reference_id: z.string(),
		})
		.safeParse({
			client_reference_id: session.client_reference_id,
		});

	if (!requiredData.success)
		throw new Error(fromZodError(requiredData.error).message);
	const { client_reference_id: bookingURI } = requiredData.data;

	const [bookingData, bookingDataErr] = await trytm(
		getCalendlyEvent(bookingURI)
	);
	if (bookingDataErr) throw new Error(bookingDataErr.message);

	await cancelCalendlyEvent(bookingData.resource.uri);

	if (session.customer === null) return;

	const [existingCustomer, existingCustomerErr] = await trytm(
		prisma.clients.findUnique({
			where: {
				stripe_customer_id: session.customer as string,
			},
		})
	);

	if (existingCustomerErr) throw new Error(existingCustomerErr.message);

	if (!existingCustomer) {
		console.error(
			"Unable to find customer in database - not able to update client data"
		);
		return;
	}

	await prisma.clients.update({
		where: {
			stripe_customer_id: session.customer as string,
		},
		data: {
			nextLesson: null,
		},
	});
};

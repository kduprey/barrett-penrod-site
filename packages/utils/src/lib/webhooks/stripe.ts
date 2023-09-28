import type { clients } from "@bpvs/db";
import { prisma } from "@bpvs/db";
import type { CalendlyEvent, CalendlyInvitee } from "@bpvs/types";
import type Stripe from "stripe";
import { getNumLessonsFromLineItems } from "../stripe";

export const updateCustomer = async (
	session: Stripe.Checkout.Session,
	client: clients,
	event: CalendlyEvent,
	lineItems: Stripe.LineItem[]
): Promise<clients> => {
	try {
		console.info("Updating Calendly webhook payload");

		if (!session.metadata?.inviteeURI)
			throw new Error("No invitee URI in metadata");
		await prisma.calendlyInviteePayloads.update({
			where: {
				uri: session.metadata.inviteeURI,
			},
			data: {
				clientId: client.id,
			},
		});
	} catch (err) {
		console.error("Error updating calendly webhook payload", err);
	}

	try {
		// Update client data

		if (!session.amount_total) throw new Error("No amount total in session");

		const updatedCustomer = await prisma.clients.update({
			where: {
				id: client.id,
			},
			data: {
				nextLesson: event.resource.start_time,
				activeMember: true,
				totalSpend: client.totalSpend + session.amount_total,

				lessonsRemaining:
					client.lessonsRemaining + getNumLessonsFromLineItems(lineItems),
			},
		});
		console.info("Updated Customer", updatedCustomer);
		return updatedCustomer;
	} catch (err) {
		console.error(err);

		throw new Error(`Error updating client data`);
	}
};

export const createCustomer = async (
	invitee: CalendlyInvitee,
	event: CalendlyEvent,
	session: Stripe.Checkout.Session,
	lineItems: Stripe.LineItem[]
): Promise<clients> => {
	if (!session.amount_total) throw new Error("No amount total in session");

	try {
		// Create new client
		console.info("Creating new customer");
		const newCustomer = await prisma.clients.create({
			data: {
				activeMember: true,
				archived: false,
				email: invitee.resource.email,
				dateJoined: event.resource.start_time,
				firstLesson: event.resource.start_time,
				lastLesson: event.resource.start_time,
				nextLesson: event.resource.start_time,
				lessonsRemaining: getNumLessonsFromLineItems(lineItems),
				name: invitee.resource.name,
				totalSpend: session.amount_total,
				stripe_customer_id: session.customer as string,
			},
		});
		console.info("Created new customer", newCustomer);

		if (!session.metadata?.inviteeURI)
			throw new Error("No invitee URI in metadata");

		try {
			await prisma.calendlyInviteePayloads.update({
				where: {
					uri: session.metadata.inviteeURI,
				},
				data: {
					clientId: newCustomer.id,
				},
			});
		} catch (err) {
			throw new Error(`Error updating invitee payload`);
		}

		return newCustomer;
	} catch (err) {
		console.error(err);

		throw new Error(`Error creating new client`);
	}
};

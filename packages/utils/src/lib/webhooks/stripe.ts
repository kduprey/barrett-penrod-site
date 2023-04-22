import { clients, prisma } from "@bpvs/db";
import { CalendlyEvent, CalendlyInvitee } from "@bpvs/types";
import Stripe from "stripe";

export const updateCustomer = async (
	session: Stripe.Checkout.Session,
	client: clients,
	event: CalendlyEvent,
	line_items: Stripe.LineItem[]
) => {
	try {
		console.info("Updating Calendly webhook payload");
		await prisma.calendlyInviteePayloads.update({
			where: {
				uri: session.metadata?.inviteeURI as string,
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
		const updatedCustomer = await prisma.clients.update({
			where: {
				id: client.id,
			},
			data: {
				nextLesson: event.resource.start_time,
				activeMember: true,
				totalSpend: client.totalSpend + (session.amount_total as number),

				lessonsRemaining:
					client.lessonsRemaining + getNumLessonsFromLineItems(line_items),
			},
		});
		console.info("Updated Customer", updatedCustomer);
		return updatedCustomer;
	} catch (err: any) {
		console.error(err);

		throw new Error(`Error updating client data: ${err}`);
	}
};

export const createCustomer = async (
	invitee: CalendlyInvitee,
	event: CalendlyEvent,
	session: Stripe.Checkout.Session,
	line_items: Stripe.LineItem[]
) => {
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
				lessonsRemaining: getNumLessonsFromLineItems(line_items),
				name: invitee.resource.name,
				totalSpend: session.amount_total as number,
				stripe_customer_id: session.customer as string,
			},
		});
		console.info("Created new customer", newCustomer);

		try {
			await prisma.calendlyInviteePayloads.update({
				where: {
					uri: session.metadata?.inviteeURI as string,
				},
				data: {
					clientId: newCustomer.id,
				},
			});
		} catch (err: any) {
			throw new Error(`Error updating invitee payload: ${err}`);
		}

		return newCustomer;
	} catch (err: any) {
		console.error(err);

		throw new Error(`Error creating new client: ${err}`);
	}
};

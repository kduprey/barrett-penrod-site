import { clients } from "@prisma/client";
import Stripe from "stripe";
import { CalendlyEvent } from "types/calendlyTypes";
import { CalendlyInvitee } from "types/types";
import { stripe } from "../config";
import prisma from "../lib/prisma";

export const checkForClient = async (name: string, email: string) => {
	let existingCustomer: clients | null;
	console.info("Checking for existing customer");
	try {
		console.info("Searching by name");
		existingCustomer = await prisma.clients.findUnique({
			where: {
				name,
			},
		});
		// If no results, seach by email
		if (!existingCustomer) {
			console.info("Searching by email");
			existingCustomer = await prisma.clients.findUnique({
				where: {
					email,
				},
			});
		}
	} catch (err) {
		console.warn(err, "DB error");
		throw new Error("Error searching DB for existing customer");
	}
	return existingCustomer;
};

export const updateClient = async (
	existingCustomer: clients,
	event: CalendlyEvent,
	calendlyEventPayloadId: string
) => {
	console.info("Updating existing customer");
	try {
		await prisma.clients.update({
			where: {
				id: existingCustomer.id,
			},
			data: {
				nextLesson: event.resource.start_time,
				activeMember: true,
				archived: false,
				lessonsRemaining: existingCustomer.lessonsRemaining + 1,
				bookings: {
					connect: {
						id: calendlyEventPayloadId,
					},
				},
			},
		});
	} catch (err: any) {
		console.error(err);
		throw new Error("Error updating existing customer", err);
	}
};

export const createStripeCustomer = async (invitee: CalendlyInvitee) => {
	let newCustomer: Stripe.Customer;
	console.info("Creating new Stripe customer");
	// Create new Stripe customer
	try {
		newCustomer = await stripe.customers.create({
			name: invitee.resource.name,
			email: invitee.resource.email,
		});
	} catch (error: any) {
		console.error(error, { invitee });
		throw new Error("Error creating new Stripe customer", error);
	}
	console.info("New Stripe customer created", newCustomer);
	return newCustomer;
};

export const createClient = async (
	event: CalendlyEvent,
	invitee: CalendlyInvitee,
	newCustomer: Stripe.Customer,
	payloadId: string
) => {
	// Create new client in database
	console.info("Creating new client in DB");
	try {
		const client = await prisma.clients.create({
			data: {
				activeMember: true,
				archived: false,
				email: invitee.resource.email,
				dateJoined: event.resource.start_time,
				firstLesson: event.resource.start_time,
				nextLesson: event.resource.start_time,
				lessonsRemaining: 1,
				name: invitee.resource.name,
				stripe_customer_id: newCustomer.id,
				totalSpend: 0,
				bookings: {
					connect: {
						id: payloadId,
					},
				},
			},
		});
		return client;
	} catch (err: any) {
		console.error(err, { invitee, event });
		throw new Error("Error creating new client in DB", err);
	}
};

import { clients } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { stripe } from "../../config";
import { CalendlyEvent, Invitee, ZoomLocation } from "../../types/types";
import { instanceOfZoomLocation } from "../../utils/isZoomLocation";
import { invalidMethod } from "../../utils/responseDefaults";
import { getEventInfo } from "./calendly/eventInfo";
import { getEventInvitee } from "./calendly/eventInvitee";
import { sendConsultationEmail } from "./emails/sendConsultation";
import { sendGuestEmails } from "./emails/sendGuestEmails";

const consultationHandler = async (eventURI: string, inviteeURI: string) => {
	let event: CalendlyEvent,
		invitee: Invitee,
		existingCustomer: clients | null,
		zoomLink: string = "";

	try {
		// Get Calendly event data
		const eventRes = await getEventInfo(eventURI);
		event = eventRes.data.resource;
		// Get invitee data
		const inviteeRes = await getEventInvitee(inviteeURI);
		invitee = inviteeRes.data.resource;
	} catch (err) {
		console.error(err);
		return { message: "Error getting event data" };
	}

	// Make sure Zoom URL is available, if Zoom location
	if (instanceOfZoomLocation(event.location)) {
		while ((event.location as ZoomLocation).status === "initiated") {
			console.log("Zoom URL not available, retrying...");
			const eventRes = await getEventInfo(eventURI);
			event = eventRes.data.resource;
		}
		zoomLink = (event.location as ZoomLocation).join_url;
	}

	// Check if user is client in database
	try {
		// Search by name
		existingCustomer = await prisma.clients.findUnique({
			where: {
				name: event.name,
			},
		});
		// If no results, seach by email
		if (!existingCustomer) {
			existingCustomer = await prisma.clients.findUnique({
				where: {
					email: invitee.email,
				},
			});
		}
	} catch (err) {
		console.error(err);
		return { message: "Error searching for existing customer" };
	}

	// If not, create user in database
	if (!existingCustomer) {
		let newCustomer: Stripe.Customer;
		// Create new Stripe customer
		try {
			newCustomer = await stripe.customers.create({
				name: invitee.name,
				email: invitee.email,
			});
		} catch (error) {
			console.error(error);
			return { message: "Error creating Stripe customer" };
		}
		// Create new client in database
		try {
			await prisma.clients.create({
				data: {
					activeMember: true,
					archived: false,
					email: invitee.email,
					dateJoined: event.start_time,
					firstLesson: event.start_time,
					nextLesson: event.start_time,
					lessonsRemaining: 1,
					name: event.name,
					stripe_customer_id: newCustomer ? newCustomer.id : null,
					totalSpend: 0,
				},
			});
		} catch (err) {
			console.error(err);
			return { message: "Error creating new client" };
		}
	} else {
		// If so, update user in database
		try {
			await prisma.clients.update({
				where: {
					id: existingCustomer.id,
				},
				data: {
					nextLesson: event.start_time,
					activeMember: true,
					archived: false,
					lessonsRemaining: existingCustomer.lessonsRemaining + 1,
				},
			});
		} catch (err) {
			console.error(err);
			return { message: "Error updating existing customer" };
		}
	}

	// Send consultation email
	try {
		await sendConsultationEmail({
			email: invitee.email,
			name: event.name,
			bookingDate: event.start_time.toString(),
			bookingName: event.event_type,
			zoomLink,
		});
	} catch (err) {
		console.error(err);
		return { message: "Error sending consultation email" };
	}

	// If guests, send guest emails
	if (event.event_guests.length > 0) {
		try {
			await sendGuestEmails({
				guests: event.event_guests,
				bookingDate: event.start_time.toString(),
				bookingName: event.event_type,
				zoomLink,
			});
		} catch (err) {
			console.error(err);
			return { message: "Error sending consultation email" };
		}
	}
};

export { consultationHandler };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	invalidMethod("POST", req, res);

	const { event, invitee } = req.body;

	if (!event || !invitee) {
		return res.status(400).json({ message: "Missing data" });
	}

	try {
		const response = await consultationHandler(event, invitee);
		return res.status(200).json(response);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Error processing request" });
	}
};

export default handler;

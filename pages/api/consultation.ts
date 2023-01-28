import { clients } from "@prisma/client";
import createHttpError from "http-errors";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import apiHandler from "utils/api";
import getBookingLocation from "utils/getBookingLocation";
import getZoomLink from "utils/getZoomLink";
import { validateRequest } from "utils/yup";
import * as Yup from "yup";
import { stripe } from "../../config";
import { CalendlyEvent, Invitee, ZoomLocation } from "../../types/types";
import { instanceOfZoomLocation } from "../../utils/isZoomLocation";
import { getEventInfo } from "./calendly/eventInfo";
import { getEventInvitee } from "./calendly/eventInvitee";
import { sendConsultationEmail } from "./emails/sendConsultation";
import { sendGuestEmails } from "./emails/sendGuestEmails";

const consultationParams = Yup.object().shape({
	eventURI: Yup.string().required("Event URI is required"),
	inviteeURI: Yup.string().required("Invitee URI is required"),
});

const consultationHandler = async (eventURI: string, inviteeURI: string) => {
	let existingCustomer: clients | null,
		zoomLink: string,
		event: CalendlyEvent,
		invitee: Invitee;

	try {
		// Get Calendly event data
		event = (await getEventInfo(eventURI)).resource;
		// Get invitee data
		invitee = (await getEventInvitee(inviteeURI)).resource;
	} catch (err: any) {
		console.error(err);
		throw new Error("Error getting consultation data", err);
	}

	// Get Zoom link
	try {
		zoomLink = await getZoomLink(eventURI);
	} catch (err) {
		console.error(err);
		throw new Error("Error getting Zoom link");
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
		console.warn(err, "DB error");
		throw new Error("Error searching DB for existing customer");
	}

	if (existingCustomer)
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
			throw new Error("Error updating existing customer");
		}

	// If not, create user in database and Stripe
	if (!existingCustomer) {
		let newCustomer: Stripe.Customer;
		// Create new Stripe customer
		try {
			newCustomer = await stripe.customers.create({
				name: invitee.name,
				email: invitee.email,
			});
		} catch (error: any) {
			console.error(error, { invitee, event });
			throw new Error("Error creating new Stripe customer", error);
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
					stripe_customer_id: newCustomer.id,
					totalSpend: 0,
				},
			});
		} catch (err: any) {
			console.error(err, { invitee, event });
			throw new Error("Error creating new client in DB", err);
		}
	}

	// Send consultation email
	try {
		await sendConsultationEmail({
			client: {
				name: invitee.name,
				email: invitee.email,
			},
			bookingDate: new Date(event.start_time),
			zoomLink,
		});
	} catch (err) {
		console.error(err);
		throw new Error("Error sending consultation email");
	}
};

export { consultationHandler };

const handler: NextApiHandler = async (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	const data = validateRequest(req.body, consultationParams);

	try {
		const response = await consultationHandler(
			data.eventURI,
			data.inviteeURI
		);
		return res.status(200).json(response);
	} catch (error) {
		console.error(error);
		throw new createHttpError.InternalServerError(
			JSON.stringify({ error, message: "Error processing request" })
		);
	}
};

export default apiHandler({
	POST: handler,
});

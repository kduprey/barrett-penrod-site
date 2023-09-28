import type { CalendlyEvent, CalendlyInvitee } from "@bpvs/types";
import { dev } from "@bpvs/types";
import {
	getCalendlyEvent,
	getCalendlyEventZoomLink,
	getCalendlyInvitee,
	getPackageTypeFromLineItems,
	getSessionLocation,
	getSessionTypeFromCalendlyEvent,
	isDownpaymentCheckout,
	isPackageCheckout,
} from "@bpvs/utils";
import type Stripe from "stripe";
import { sendFirstTimeEmail } from "./firstTime";
import { sendGuestEmails } from "./guestEmail";
import { sendPackageConfirmationEmail } from "./packageConfirmation";
import { sendSingleBookingEmail } from "./singleBooking";

export const sendCheckoutEmails = async (
	session: Stripe.Checkout.Session,
	lineItems: Stripe.LineItem[]
): Promise<boolean> => {
	let event: CalendlyEvent,
		invitee: CalendlyInvitee,
		zoomLink: string | null = null;

	try {
		if (!session.client_reference_id) throw new Error("No client reference ID");

		if (!session.metadata?.inviteeURI)
			throw new Error("No invitee URI in metadata");

		event = await getCalendlyEvent(session.client_reference_id);
		invitee = await getCalendlyInvitee(session.metadata.inviteeURI);
	} catch (err: unknown) {
		console.error("Error getting booking info", err);

		throw new Error("Error getting booking info");
	}

	const name = invitee.resource.name;
	const email = dev ? "kdtech18@gmail.com" : invitee.resource.email;
	const bookingDate = new Date(event.resource.start_time);

	zoomLink = await getCalendlyEventZoomLink(event);

	// Are there guests?
	// If so, send guest email
	if (event.resource.event_guests.length > 0) {
		// Send guest email
		try {
			const guestEmail = await sendGuestEmails({
				guests: event.resource.event_guests,
				sessionType: getSessionTypeFromCalendlyEvent(event),
				bookingLocation: getSessionLocation(event),
				bookingDate,
				zoomLink: zoomLink ? zoomLink : undefined,
			});

			console.info("Guest Email Response: ", guestEmail);
		} catch (error: unknown) {
			console.error("Error sending guest email", error);
			throw new Error("Error sending guest email");
		}
	}

	// Is this a new customer?
	// If so, send first-time customer email
	// If not, send booking confirmation email
	if (
		invitee.resource.questions_and_answers.find(
			(e) => e.question === "Is this your first lesson with Barrett?"
		)
	) {
		const emails = [];

		for (const question of invitee.resource.questions_and_answers) {
			if (
				question.question === "Is this your first lesson with Barrett?" &&
				question.answer === "Yes"
			)
				// Send first-time customer email
				try {
					const firstTimeCustomerEmail = emails.push(
						sendFirstTimeEmail({
							client: {
								email,
								name,
							},
							bookingDate,
							sessionType: getSessionTypeFromCalendlyEvent(event),
							bookingLocation: getSessionLocation(event),
							zoomLink: zoomLink ? zoomLink : undefined,
						})
					);
					console.info(
						"First Time Customer Email Response: ",
						firstTimeCustomerEmail
					);
				} catch (err: unknown) {
					console.error("Error sending first-time customer email", err);

					throw new Error("Error sending first-time customer email");
				}
		}
		await Promise.all(emails);
	}

	// Is this a package?
	const isPackage = isPackageCheckout(lineItems);
	if (isPackage) {
		// Send package email
		try {
			const packageEmail = await sendPackageConfirmationEmail({
				client: { email, name },
				packageName: getPackageTypeFromLineItems(lineItems),
				sessionType: getSessionTypeFromCalendlyEvent(event),
				bookingDate,
				bookingLocation: getSessionLocation(event),
				zoomLink: zoomLink ? zoomLink : undefined,
			});
			console.info("Package Email Response: ", packageEmail);
		} catch (error: unknown) {
			console.error("Error sending package email", error);

			throw new Error("Error sending package email");
		}
	}

	// Is this a single session?
	const isDownpayment = isDownpaymentCheckout(lineItems);
	if (
		isDownpayment &&
		invitee.resource.questions_and_answers.find(
			(e) => e.question === "Is this your first lesson with Barrett?"
		)?.answer === "No"
	) {
		// Send single session email
		try {
			const singleSessionEmail = await sendSingleBookingEmail({
				client: { email, name },
				sessionType: getSessionTypeFromCalendlyEvent(event),
				bookingDate,
				bookingLocation: getSessionLocation(event),
				zoomLink: zoomLink ? zoomLink : undefined,
			});
			console.info("Single Session Email Response: ", singleSessionEmail);
		} catch (error: unknown) {
			console.error("Error sending single session email", error);

			throw new Error("Error sending single session email");
		}
	}

	return true;
};

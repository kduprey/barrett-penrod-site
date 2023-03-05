import { dev, stripe } from "config/index";
import { sendSingleBookingEmail } from "pages/api/emails/sendSingleBookingEmail";
import Stripe from "stripe";
import { getEventInfo } from "../pages/api/calendly/eventInfo";
import { getEventInvitee } from "../pages/api/calendly/eventInvitee";
import { sendFirstTimeEmail } from "../pages/api/emails/sendFirstTimeEmail";
import { sendGuestEmails } from "../pages/api/emails/sendGuestEmails";
import { sendPackageConfirmationEmail } from "../pages/api/emails/sendPackageConfirmation";
import { CalendlyEvent } from "../types/calendlyTypes";
import { CalendlyInvitee } from "../types/types";
import getBookingLocation from "./getBookingLocation";
import getPackageName from "./getPackageName";
import getSessionType from "./getSessionType";
import getZoomLink from "./getZoomLink";
import isDownpaymentCheckout from "./isDownpaymentCheckout";
import isPackageCheckout from "./isPackageCheckout";

const sendCheckoutEmails = async (
	session: Stripe.Checkout.Session
): Promise<Error[] | boolean> => {
	let bookingInfo: CalendlyEvent,
		inviteeInfo: CalendlyInvitee,
		zoomLink: string | null = null;
	const errors: Error[] = [];
	const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

	try {
		bookingInfo = await getEventInfo(session.client_reference_id as string);
		inviteeInfo = await getEventInvitee(
			session.metadata?.inviteeURI as string
		);
	} catch (err: unknown) {
		console.error("Error getting booking info", err);
		if (err instanceof Error) errors.push(err);
		throw new Error("Error getting booking info");
	}

	const name = inviteeInfo.resource.name;
	const email = dev ? "kdtech18@gmail.com" : inviteeInfo.resource.email;
	const bookingDate = new Date(bookingInfo.resource.start_time);

	zoomLink = await getZoomLink(session.client_reference_id as string);

	// Are there guests?
	// If so, send guest email
	if (bookingInfo.resource.event_guests.length > 0) {
		// Send guest email
		try {
			const guestEmail = await sendGuestEmails({
				guests: bookingInfo.resource.event_guests,
				sessionType: getSessionType(bookingInfo),
				bookingLocation: getBookingLocation(bookingInfo),
				bookingDate,
				zoomLink: zoomLink ? zoomLink : undefined,
			});

			console.info("Guest Email Response: ", guestEmail);
		} catch (error: unknown) {
			console.error("Error sending guest email", error);
			if (error instanceof Error) errors.push(error);
			throw new Error("Error sending guest email");
		}
	}

	// Is this a new customer?
	// If so, send first-time customer email
	// If not, send booking confirmation email
	if (
		inviteeInfo.resource.questions_and_answers.find((e) => {
			return e.question === "Is this your first lesson with Barrett?"
				? true
				: false;
		})
	)
		inviteeInfo.resource.questions_and_answers.forEach(async (qna) => {
			if (
				qna.question === "Is this your first lesson with Barrett?" &&
				qna.answer === "Yes"
			)
				// Send first-time customer email
				try {
					const firstTimeCustomerEmail = await sendFirstTimeEmail({
						client: {
							email,
							name,
						},
						bookingDate,
						sessionType: getSessionType(bookingInfo),
						bookingLocation: getBookingLocation(bookingInfo),
						zoomLink: zoomLink ? zoomLink : undefined,
					});
					console.info(
						"First Time Customer Email Response: ",
						firstTimeCustomerEmail
					);
				} catch (err: unknown) {
					console.error(
						"Error sending first-time customer email",
						err
					);
					if (err instanceof Error) errors.push(err);

					throw new Error("Error sending first-time customer email");
				}
		});

	// Is this a package?
	const isPackage = await isPackageCheckout(session);
	if (isPackage) {
		// Send package email
		try {
			const packageEmail = await sendPackageConfirmationEmail({
				client: { email, name },
				packageName: getPackageName(
					lineItems.data as Stripe.LineItem[]
				),
				sessionType: getSessionType(bookingInfo),
				bookingDate,
				bookingLocation: getBookingLocation(bookingInfo),
				zoomLink: zoomLink ? zoomLink : undefined,
			});
			console.info("Package Email Response: ", packageEmail);
		} catch (error: unknown) {
			console.error("Error sending package email", error);
			if (error instanceof Error) errors.push(error);

			throw new Error("Error sending package email");
		}
	}

	// Is this a single session?
	const isDownpayment = await isDownpaymentCheckout(session);
	if (
		isDownpayment &&
		!inviteeInfo.resource.questions_and_answers.find((e) => {
			return e.question === "Is this your first lesson with Barrett?"
				? true
				: false;
		})
	) {
		// Send single session email
		try {
			const singleSessionEmail = await sendSingleBookingEmail({
				client: { email, name },
				sessionType: getSessionType(bookingInfo),
				bookingDate,
				bookingLocation: getBookingLocation(bookingInfo),
				zoomLink: zoomLink ? zoomLink : undefined,
			});
			console.info("Single Session Email Response: ", singleSessionEmail);
		} catch (error: unknown) {
			console.error("Error sending single session email", error);
			if (error instanceof Error) errors.push(error);

			throw new Error("Error sending single session email");
		}
	}

	return errors.length > 0 ? errors : true;
};

export default sendCheckoutEmails;

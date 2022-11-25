import { AxiosResponse } from "axios";
import Stripe from "stripe";
import { dev, stripe } from "../config";
import { getEventInfo } from "../pages/api/calendly/getEventInfo";
import { getEventInvitee } from "../pages/api/calendly/getEventInvitee";
import { sendConsultationEmail } from "../pages/api/emails/sendConsultation";
import { sendFirstTimeEmail } from "../pages/api/emails/sendFirstTimeEmail";
import { sendGuestEmails } from "../pages/api/emails/sendGuestEmails";
import { sendPackageConfirmationEmail } from "../pages/api/emails/sendPackageConfirmation";
import {
	CalendlyEvent,
	CalendlyInvitee,
	Invitee,
	ZoomLocation,
} from "../types/types";
import getBookongLocation from "./getBookingLocation";
import getPackageName from "./getPackageName";
import getZoomLink from "./getZoomLink";
import isDownpaymentCheckout from "./isDownpaymentCheckout";
import isPackageCheckout from "./isPackageCheckout";
import { instanceOfZoomLocation } from "./isZoomLocation";

const sendCheckoutEmails = async (
	session: Stripe.Checkout.Session
): Promise<any[] | boolean> => {
	let bookingInfo: AxiosResponse<CalendlyEvent>,
		inviteeInfo: AxiosResponse<CalendlyInvitee>,
		zoomLink: string | null = null;
	const errors = [];
	const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

	try {
		bookingInfo = await getEventInfo(session.client_reference_id as string);
		inviteeInfo = await getEventInvitee(
			session.metadata?.inviteeURI as string
		);
	} catch (err: any) {
		errors.push(err);
		return err;
	}

	const name = inviteeInfo.data.resource.name;
	const email = dev ? "kdtech18@gmail.com" : inviteeInfo.data.resource.email;
	const bookingDate = bookingInfo.data.resource.start_time.toString();
	const bookingName = bookingInfo.data.resource.name;

	zoomLink = await getZoomLink(session.client_reference_id as string);

	// Are there guests?
	// If so, send guest email
	if (bookingInfo.data.resource.event_guests.length > 0) {
		// Send guest email
		try {
			const guestEmail = await sendGuestEmails({
				guests: bookingInfo.data.resource.event_guests,
				bookingDate,
				bookingName,
				zoomLink: zoomLink ? zoomLink : undefined,
			});

			console.info("Guest Email Response: ", guestEmail);
		} catch (error: any) {
			console.error("Error sending guest email", error);
			errors.push(error);
		}
	}

	// Is this a new customer?
	// If so, send first-time customer email
	// If not, send booking confirmation email
	if (inviteeInfo.data.resource.questions_and_answers.length > 0)
		inviteeInfo.data.resource.questions_and_answers.forEach(async (qna) => {
			if (
				qna.question === "Is this your first lesson with Barrett?" &&
				qna.answer === "Yes"
			)
				// Send first-time customer email
				try {
					const firstTimeCustomerEmail = await sendFirstTimeEmail({
						email,
						name,
						bookingDate,
						bookingName,
						zoomLink: zoomLink ? zoomLink : undefined,
					});
					console.info(
						"First Time Customer Email Response: ",
						firstTimeCustomerEmail
					);
				} catch (err: any) {
					console.error(
						"Error sending first-time customer email",
						err
					);
					errors.push(err);
				}
		});

	// Is this a package?
	if (await isPackageCheckout(session)) {
		// Send package email
		try {
			const packageEmail = await sendPackageConfirmationEmail({
				email,
				name,
				packageName: getPackageName(
					lineItems.data as Stripe.LineItem[]
				),
				bookingDate,
				bookingLocation: getBookongLocation(bookingInfo.data),
				zoomLink: zoomLink ? zoomLink : undefined,
			});
			console.info("Package Email Response: ", packageEmail);
		} catch (error: any) {
			console.error("Error sending package email", error);
			errors.push(error);
		}
	}
	// Is this a single session?
	if (await isDownpaymentCheckout(session)) {
		// Send single session email
		try {
			const singleSessionEmail = await sendPackageConfirmationEmail({
				email,
				name,
				packageName: getPackageName(
					lineItems.data as Stripe.LineItem[]
				),
				bookingDate,
				bookingLocation: getBookongLocation(bookingInfo.data),
				zoomLink: zoomLink ? zoomLink : undefined,
			});
			console.info("Single Session Email Response: ", singleSessionEmail);
		} catch (error: any) {
			console.error("Error sending single session email", error);
			errors.push(error);
		}
	}

	return errors.length > 0 ? errors : true;
};

export default sendCheckoutEmails;

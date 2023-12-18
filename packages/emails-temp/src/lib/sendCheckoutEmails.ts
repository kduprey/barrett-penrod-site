import { CalendlyEvent, CalendlyInvitee, dev } from "@bpvs/types";
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
import Stripe from "stripe";
import { sendFirstTimeEmail } from "./firstTime";
import { sendGuestEmails } from "./guestEmail";
import { sendPackageConfirmationEmail } from "./packageConfirmation";
import { sendSingleBookingEmail } from "./singleBooking";
import { formatBookingDate } from "./utils";

export const sendCheckoutEmails = async (
  session: Stripe.Checkout.Session,
  lineItems: Stripe.LineItem[],
): Promise<Error[] | boolean> => {
  let event: CalendlyEvent,
    invitee: CalendlyInvitee,
    zoomLink: string | null = null;
  const errors: Error[] = [];

  try {
    event = await getCalendlyEvent(session.client_reference_id as string);
    invitee = await getCalendlyInvitee(session.metadata?.inviteeURI as string);
  } catch (err: unknown) {
    console.error("Error getting booking info", err);
    if (err instanceof Error) errors.push(err);
    throw new Error("Error getting booking info");
  }

  const name = invitee.resource.name;
  const email = dev ? "kdtech18@gmail.com" : invitee.resource.email;
  const formattedBookingDate = formatBookingDate(
    new Date(event.resource.start_time),
    invitee.resource.timezone,
  );

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
        formattedBookingDate,
        zoomLink: zoomLink ?? undefined,
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
    invitee.resource.questions_and_answers.find(
      (e) => e.question === "Is this your first lesson with Barrett?",
    )
  ) {
    for (const questionAndAnswer of invitee.resource.questions_and_answers) {
      if (
        questionAndAnswer.question ===
          "Is this your first lesson with Barrett?" &&
        questionAndAnswer.answer === "Yes"
      )
        // Send first-time customer email
        try {
          const firstTimeCustomerEmail = await sendFirstTimeEmail({
            client: {
              email,
              name,
            },
            formattedBookingDate,
            sessionType: getSessionTypeFromCalendlyEvent(event),
            bookingLocation: getSessionLocation(event),
            zoomLink: zoomLink ?? undefined,
          });
          console.info(
            "First Time Customer Email Response: ",
            firstTimeCustomerEmail,
          );
        } catch (err: unknown) {
          console.error("Error sending first-time customer email", err);
          if (err instanceof Error) errors.push(err);

          throw new Error("Error sending first-time customer email");
        }
    }
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
        formattedBookingDate,
        bookingLocation: getSessionLocation(event),
        zoomLink: zoomLink ?? undefined,
      });
      console.info("Package Email Response: ", packageEmail);
    } catch (error: unknown) {
      console.error("Error sending package email", error);
      if (error instanceof Error) errors.push(error);

      throw new Error("Error sending package email");
    }
  }

  // Is this a single session?
  const isDownpayment = isDownpaymentCheckout(lineItems);
  if (
    isDownpayment &&
    invitee.resource.questions_and_answers.find(
      (e) => e.question === "Is this your first lesson with Barrett?",
    )?.answer === "No"
  ) {
    // Send single session email
    try {
      const singleSessionEmail = await sendSingleBookingEmail({
        client: { email, name },
        sessionType: getSessionTypeFromCalendlyEvent(event),
        formattedBookingDate,
        bookingLocation: getSessionLocation(event),
        zoomLink: zoomLink ?? undefined,
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

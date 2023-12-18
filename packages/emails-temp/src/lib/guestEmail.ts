import { dev, GuestEmails } from "@bpvs/types";
import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import { sendgrid } from "./sendgrid";

/**
 * This endpoint is used to send a guest email to a list of guests whom are attending a session.
 * @param guests - The guests to send the email to
 * @param formattedBookingDate - The formatted date and time of the booking
 * @param bookingName - The name of the booking
 * @param zoomLink - The zoom link for the booking
 * @returns The response from SendGrid
 */

export const sendGuestEmails = async ({
  guests,
  sessionType,
  bookingLocation,
  formattedBookingDate,
  zoomLink,
}: GuestEmails): Promise<ClientResponse> => {
  const templateId = "d-b628680e34354157b553625c036e2836";

  const message: MailDataRequired = {
    from: {
      email: "barrett@barrettpenrod.com",
      name: "Barrett Penrod Voice Studio",
    },
    replyTo: {
      email: "barrettpenrod@gmail.com",
      name: "Barrett Penrod",
    },
    personalizations: [
      {
        to: [...guests],
        dynamicTemplateData: {
          ...formattedBookingDate,
          sessionType,
          bookingLocation,
          zoomLink,
        },
      },
    ],
    templateId,
    mailSettings: {
      sandboxMode: {
        enable: dev,
      },
    },
  };

  try {
    console.log("Sending guest emails...");

    const response = await sendgrid.send(message);
    console.log("Guest emails sent!");

    console.log(response);
    return response[0];
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error)
      throw new Error(`Error sending email: ${error.message}`);
    throw new Error("Error sending email");
  }
};

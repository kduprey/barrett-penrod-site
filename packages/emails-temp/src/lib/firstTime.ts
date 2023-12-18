import { dev, FirstTimeEmail } from "@bpvs/types";
import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import { sendgrid } from "./sendgrid";

/**
 * This endpoint is used to send a first time email to a client after booking a session.
 * @param email The email address of the client
 * @param name The name of the client
 * @param formattedBookingDate The date of the event
 * @param bookingName The name of the booking
 * @param zoomLink The zoom link for the event
 * @returns The response from SendGrid
 */

export const sendFirstTimeEmail = async ({
  client,
  formattedBookingDate,
  sessionType,
  bookingLocation,
  zoomLink,
}: FirstTimeEmail): Promise<ClientResponse> => {
  const templateId = "d-c859a7aa6e04450b952a683aeb9ded1d";

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
        to: client,
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
    console.log("Sending first time email...");

    const response = await sendgrid.send(message);
    console.log("Email sent!");

    return response[0];
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error)
      throw new Error(`Error sending email: ${error.message}`);

    throw new Error("Error sending email");
  }
};

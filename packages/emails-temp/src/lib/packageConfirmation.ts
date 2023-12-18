import { dev, PackageConfirmationEmail } from "@bpvs/types";
import { ClientResponse, MailDataRequired } from "@sendgrid/mail";
import { sendgrid } from "./sendgrid";

/**
 * This endpoint is used to send a package confirmation email to a client after booking a package.
 * @param client - The email address and name of the client
 * @param packageName - The name of the package that was booked
 * @param sessionType - The type of session in the package
 * @param formattedBookingDate - The formatted date and time of the first lesson in the package
 * @param bookingLocation - The location of the first lesson in the package
 * @param zoomLink - The zoom link for the first lesson in the package
 * @returns - The response from SendGrid
 */

export const sendPackageConfirmationEmail = async ({
  client,
  packageName,
  sessionType,
  formattedBookingDate,
  bookingLocation,
  zoomLink,
}: PackageConfirmationEmail): Promise<ClientResponse> => {
  const templateId = "d-368ad77a4b3d4fb9ac48daa0b10eb63e";

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
          packageName,
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
    console.log("Sending package confirmation email...");

    const response = await sendgrid.send(message);
    console.log("Package confirmation email sent!");

    return response[0];
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof Error)
      throw new Error(`Error sending email: ${error.message}`);

    throw new Error("Error sending email");
  }
};

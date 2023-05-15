import { sendGuestEmails } from "@bpvs/emails-temp";
import { apiHandler } from "@bpvs/utils";
import { guestEmailsSchema } from "@bpvs/validation";
import createHttpError from "http-errors";
import type { NextApiRequest, NextApiResponse } from "next";

// Template Data
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "sessionType": "Voice Lesson",
//     "bookingLocation": "Virtual",
//     "zoomLink": "https://zoom.us/testlink"
// }

/**
 * This endpoint is used to send a guest email to a list of guests whom are attending a session.
 * @param guests - The guests to send the email to
 * @param bookingDate - The time of the booking
 * @param bookingName - The name of the booking
 * @param zoomLink - The zoom link for the booking
 * @returns The response from SendGrid
 */

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = guestEmailsSchema.parse(req.body);

  try {
    const response = await sendGuestEmails(data);
    console.log(response);
    res.status(200).json(response);
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error) {
      throw new createHttpError.InternalServerError(
        JSON.stringify({
          message: "There was an error sending the email.",
          error,
        })
      );
    }
    throw new createHttpError.InternalServerError(
      JSON.stringify({
        message: "There was an error sending the email.",
      })
    );
  }
};

export default apiHandler({
  POST: handler,
});

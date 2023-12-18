import { sendConsultationEmail } from "@bpvs/emails-temp";
import { apiHandler } from "@bpvs/utils";
import { consultationEmailSchema } from "@bpvs/validation";
import createHttpError from "http-errors";
import { NextApiRequest, NextApiResponse } from "next";

// Example for email template data:
// {
//     "bookingTime": "2:00 pm",
//     "bookingDate": "June 26, 2022",
//     "zoomLink": "https://us06web.zoom.us/j/87847325639"
// }

/**
 * This endpoint is used to send a confirmation email to a client after booking a consultation.
 * @param client - The client's email and name
 * @param formattedBookingDate - The formatted start time and date of the consultation
 * @param zoomLink - The link to the Zoom meeting
 * @returns The response from SendGrid
 */

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = consultationEmailSchema.parse(req.body);

  try {
    const response = await sendConsultationEmail(data);
    res.status(200).json(response);
  } catch (error: unknown) {
    console.error(error);
    if (error instanceof Error)
      throw new createHttpError.InternalServerError(
        JSON.stringify({
          message: "There was an error sending the email.",
          error,
        }),
      );

    throw new createHttpError.InternalServerError(
      JSON.stringify({
        message: "There was an error sending the email.",
      }),
    );
  }
};

export default apiHandler({
  POST: handler,
});

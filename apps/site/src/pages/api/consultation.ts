import { stripe } from "@bpvs/config";
import { clients, prisma } from "@bpvs/db";
import { sendConsultationEmail } from "@bpvs/emails-temp";
import {
  CalendlyEvent,
  CalendlyInvitee,
  CalendlyPayloadData,
} from "@bpvs/types";
import { apiHandler, getCalendlyEventZoomLink } from "@bpvs/utils";
import { calendlyPayloadDataSchema } from "@bpvs/validation";
import createHttpError from "http-errors";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { z } from "zod";

export const createStripeCustomer = async (invitee: CalendlyInvitee) => {
  let newCustomer: Stripe.Customer;
  console.info("Creating new Stripe customer");
  // Create new Stripe customer
  try {
    newCustomer = await stripe.customers.create({
      name: invitee.resource.name,
      email: invitee.resource.email,
    });
  } catch (error) {
    console.error(error, { invitee });
    throw new Error(`Error creating new Stripe customer: ${error as string}`);
  }
  console.info("New Stripe customer created", newCustomer);
  return newCustomer;
};

export const createClient = async (
  event: CalendlyEvent,
  invitee: CalendlyInvitee,
  newCustomer: Stripe.Customer,
  payloadId: string
) => {
  // Create new client in database
  console.info("Creating new client in DB");
  try {
    const client = await prisma.clients.create({
      data: {
        activeMember: true,
        archived: false,
        email: invitee.resource.email,
        dateJoined: event.resource.start_time,
        firstLesson: event.resource.start_time,
        nextLesson: event.resource.start_time,
        lessonsRemaining: 1,
        name: invitee.resource.name,
        stripe_customer_id: newCustomer.id,
        totalSpend: 0,
        bookings: {
          connect: {
            id: payloadId,
          },
        },
      },
    });
    return client;
  } catch (err) {
    console.error(err, { invitee, event });
    throw new Error(`Error creating new client in DB: ${err as string}`);
  }
};

export const updateClient = async (
  existingCustomer: clients,
  event: CalendlyEvent,
  calendlyEventPayloadId: string
) => {
  console.info("Updating existing customer");
  try {
    await prisma.clients.update({
      where: {
        id: existingCustomer.id,
      },
      data: {
        nextLesson: event.resource.start_time,
        activeMember: true,
        archived: false,
        lessonsRemaining: existingCustomer.lessonsRemaining + 1,
        bookings: {
          connect: {
            id: calendlyEventPayloadId,
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
    throw new Error(`Error updating existing customer: ${err as string}`);
  }
};

export const checkForClient = async (name: string, email: string) => {
  let existingCustomer: clients | null;
  console.info("Checking for existing customer");
  try {
    console.info("Searching by name");
    existingCustomer = await prisma?.clients?.findUnique({
      where: {
        name,
      },
    });
    // If no results, search by email
    if (!existingCustomer) {
      console.info("Searching by email");
      existingCustomer = await prisma.clients.findUnique({
        where: {
          email,
        },
      });
    }
  } catch (err) {
    console.warn(err, "DB error");
    throw new Error("Error searching DB for existing customer");
  }
  return existingCustomer;
};

const consultationParams = z.object({
  calendlyEventPayload: calendlyPayloadDataSchema,
  calendlyPayloadId: z.string({
    required_error: "Calendly payload ID is required",
  }),
});

const consultationHandler = async (
  calendlyEventPayload: CalendlyPayloadData,
  calendlyPayloadId: string
): Promise<string> => {
  let zoomLink: string | null;

  console.log("Consultation handler started...");

  // Get Zoom link
  try {
    console.info("Getting Zoom link");
    zoomLink = await getCalendlyEventZoomLink({
      resource: calendlyEventPayload.scheduled_event,
    });
    if (!zoomLink) throw new Error("No Zoom link found");
  } catch (err) {
    console.error(err);
    throw new Error("Error getting Zoom link");
  }

  // Check if user is client in database
  console.log("Checking if user is client");
  const existingCustomer = await checkForClient(
    calendlyEventPayload.name,
    calendlyEventPayload.email
  );

  // If user is already a client, update their data
  if (existingCustomer)
    await updateClient(
      existingCustomer,
      { resource: calendlyEventPayload.scheduled_event },
      calendlyPayloadId
    );
  else {
    // If not, create user in database and Stripe

    const stripeCustomer = await createStripeCustomer({
      resource: calendlyEventPayload,
    });
    await createClient(
      { resource: calendlyEventPayload.scheduled_event },
      { resource: calendlyEventPayload },
      stripeCustomer,
      calendlyPayloadId
    );
  }

  // Send consultation email
  try {
    console.log("Sending consultation email");

    await sendConsultationEmail({
      client: {
        name: calendlyEventPayload.name,
        email: calendlyEventPayload.email,
      },
      bookingDate: new Date(calendlyEventPayload.scheduled_event.start_time),
      zoomLink,
    });
    return "Consultation email sent and client created";
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
  const { calendlyEventPayload, calendlyPayloadId } = consultationParams.parse(
    req.body
  );
  try {
    const response = await consultationHandler(
      calendlyEventPayload,
      calendlyPayloadId
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

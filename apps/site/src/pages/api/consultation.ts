import { sendConsultationEmail } from "@bpvs/emails-temp";
import { CalendlyEvent, CalendlyInvitee } from "@bpvs/types";
import {
	apiHandler,
	checkForClient,
	createClient,
	createStripeCustomer,
	getCalendlyEvent,
	getCalendlyEventZoomLink,
	getCalendlyInvitee,
	updateClient,
} from "@bpvs/utils";
import createHttpError from "http-errors";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const consultationParamsSchema = z.object({
	eventURI: z.string(),
	inviteeURI: z.string(),
	calendlyPayloadId: z.string(),
});

const consultationHandler = async (
	eventURI: string,
	inviteeURI: string,
	calendlyPayloadId: string
): Promise<string> => {
	let zoomLink: string;
	let event: CalendlyEvent;
	let invitee: CalendlyInvitee;

	console.log("Consultation handler started...");

	try {
		console.info("Getting Calendly event data");
		// Get Calendly event data
		event = await getCalendlyEvent(eventURI);
		// Get invitee data
		invitee = await getCalendlyInvitee(inviteeURI);
	} catch (err: unknown) {
		console.error(err);
		if (err instanceof Error)
			throw new Error(`Error getting consultation data: ${err}`);
		else throw new Error("Error getting consultation data");
	}

	// Get Zoom link
	try {
		console.info("Getting Zoom link");
		zoomLink = await getCalendlyEventZoomLink(event);
	} catch (err) {
		console.error(err);
		throw new Error("Error getting Zoom link");
	}

	// Check if user is client in database
	console.log("Checking if user is client");
	const existingCustomer = await checkForClient(
		invitee.resource.name,
		invitee.resource.email
	);

	// If user is already a client, update their data
	if (existingCustomer)
		await updateClient(existingCustomer, event, calendlyPayloadId);
	else {
		// If not, create user in database and Stripe

		const stripeCustomer = await createStripeCustomer(invitee);
		await createClient(event, invitee, stripeCustomer, calendlyPayloadId);
	}

	// Send consultation email
	try {
		console.log("Sending consultation email");

		await sendConsultationEmail({
			client: {
				name: invitee.resource.name,
				email: invitee.resource.email,
			},
			bookingDate: new Date(event.resource.start_time),
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
	const { eventURI, inviteeURI, calendlyPayloadId } =
		consultationParamsSchema.parse(req.body);
	try {
		const response = await consultationHandler(
			eventURI,
			inviteeURI,
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

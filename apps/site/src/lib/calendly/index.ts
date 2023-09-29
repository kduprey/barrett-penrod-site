import { trytm } from "@bdsqqq/try";
import { sendConsultationEmail } from "@bpvs/emails-temp";
import type { CalendlyPayloadData } from "@bpvs/types";
import {
	getCalendlyEventZoomLink,
	checkForClient,
	updateClient,
	createStripeCustomer,
	createClient,
} from "@bpvs/utils";

export const consultationHandler = async (
	calendlyEventPayload: CalendlyPayloadData,
	calendlyPayloadId: string
) => {
	console.info("Consultation handler started...");

	// Get Zoom link
	console.info("Getting Zoom link");
	const [zoomLink, zoomLinkErr] = await trytm(
		getCalendlyEventZoomLink({
			resource: calendlyEventPayload.scheduled_event,
		})
	);
	if (zoomLinkErr) throw new Error("Error getting Zoom link");
	if (!zoomLink) throw new Error("No Zoom link found");

	// Check if user is client in database
	console.info("Checking if user is client");
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
	console.info("Sending consultation email");

	await sendConsultationEmail({
		client: {
			name: calendlyEventPayload.name,
			email: calendlyEventPayload.email,
		},
		bookingDate: new Date(calendlyEventPayload.scheduled_event.start_time),
		zoomLink,
	});

	console.info("Consultation email sent and client created");
};

import { stripe } from "@bpvs/config";
import {
	getCalendlyEvent,
	getCalendlyEventZoomLink,
	getCalendlyInvitee,
	getPackageTypeFromLineItems,
	isPackageCheckout,
} from "@bpvs/utils";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export const getSuccessData = async (sessionID: string) => {
	const session = await stripe.checkout.sessions.retrieve(sessionID);
	const lineItems = await stripe.checkout.sessions.listLineItems(sessionID);
	const clientRefId = z.string().safeParse(session.client_reference_id);
	if (!clientRefId.success)
		throw new Error(fromZodError(clientRefId.error).message);
	const inviteeURI = z.string().safeParse(session.metadata?.inviteeURI);
	if (!inviteeURI.success)
		throw new Error(fromZodError(inviteeURI.error).message);

	const event = await getCalendlyEvent(clientRefId.data);
	const invitee = await getCalendlyInvitee(inviteeURI.data);

	if (!isPackageCheckout(lineItems.data))
		return {
			name: invitee.resource.name,
			startTime: event.resource.start_time,
			zoomLink: await getCalendlyEventZoomLink(event),
			sessionTitle: event.resource.name,
		};
	return {
		name: invitee.resource.name,
		startTime: event.resource.start_time,
		zoomLink: await getCalendlyEventZoomLink(event),
		sessionTitle: event.resource.name,
		packageName: getPackageTypeFromLineItems(lineItems.data),
	};
};

export const getConsultationSuccessData = async (
	eventURI: string,
	inviteeURI: string
) => {
	const event = await getCalendlyEvent(eventURI);
	const invitee = await getCalendlyInvitee(inviteeURI);

	return {
		name: invitee.resource.name,
		startTime: event.resource.start_time,
		zoomLink: await getCalendlyEventZoomLink(event),
		sessionTitle: event.resource.name,
	};
};

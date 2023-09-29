import { stripe } from "@bpvs/config";
import { getCalendlyInvitee } from "@bpvs/utils";

export const getCancelData = async (sessionId: string) => {
	const session = await stripe.checkout.sessions.retrieve(sessionId);
	const invitee = await getCalendlyInvitee(
		session.metadata?.inviteeURI as string
	);

	return {
		name: invitee.resource.name,
		sessionUrl: session.after_expiration?.recovery?.url,
	};
};

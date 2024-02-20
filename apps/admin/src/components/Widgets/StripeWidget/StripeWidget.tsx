import { stripe } from "@bpvs/config";
import { StripeDisconnectedCard } from "./StripeDisconnectedCard/StripeDisconnectedCard";
import { StripeConnectedCard } from "./StripeConnectedCard/StripeConnectedCard";
import { getStripeCredentials } from "@/utils/stripe/credentials";

export const StripeWidget = async () => {
	const stripeCredentials = await getStripeCredentials();

	if (!stripeCredentials?.stripe_user_id) {
		return <StripeDisconnectedCard />;
	}
	const data = await stripe.accounts.retrieve(stripeCredentials.stripe_user_id);

	return <StripeConnectedCard {...data} />;
};

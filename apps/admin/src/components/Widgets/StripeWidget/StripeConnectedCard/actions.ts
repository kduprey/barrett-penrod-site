import {
	deleteStripeKeys,
	getStripeCredentials,
} from "@/utils/stripe/credentials";

export const disconnectStripe = async () => {
	const credentials = await getStripeCredentials();
	if (!credentials) return;

	return deleteStripeKeys();
};

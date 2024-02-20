import { Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import type { UseQueryResult } from "@tanstack/react-query";
import type Stripe from "stripe";

interface ConnectStripeStepProps {
	nextStep: () => void;
	stripeData: UseQueryResult<
		Stripe.Response<Stripe.Account> | null | undefined
	>;
}

export const ConnectStripeStep = ({
	nextStep,
	stripeData: { isLoading, data },
}: ConnectStripeStepProps) => {
	if (isLoading) return <Text>Loading...</Text>;

	if (data?.settings?.dashboard.display_name)
		return (
			<Group>
				<p>Connected!</p>
				<Button onClick={nextStep}>Next</Button>
			</Group>
		);

	return (
		<Button component={Link} href="/api/oauth/stripe/add?isFirstTime=true">
			Connect Stripe Account
		</Button>
	);
};

"use client";

import { Card, Group, Title, Stack, Badge, Button } from "@mantine/core";
import type Stripe from "stripe";
import { disconnectStripe } from "./actions";

export const StripeConnectedCard = (props: Stripe.Response<Stripe.Account>) => {
	return (
		<Card>
			<Group justify="space-between">
				<Title>Stripe</Title>
				<Stack align="center" justify="flex-end">
					<Badge color="green">Connected</Badge>
					<Button
						color="red"
						onClick={async () => {
							await disconnectStripe();
						}}
						variant="subtle"
					>
						Disconnect
					</Button>
				</Stack>
			</Group>
			{props.settings?.dashboard.display_name}
		</Card>
	);
};

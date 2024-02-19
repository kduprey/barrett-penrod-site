import { Card, Group, Title, Text, Badge, Button } from "@mantine/core";
import Link from "next/link";

export const StripeDisconnectedCard = () => {
	return (
		<Card>
			<Group justify="space-between">
				<Title>Stripe</Title>
				<Badge color="red">Disconnected</Badge>
			</Group>

			<>
				<Text fw={700} pb="sm">
					Stripe is not set up.
				</Text>
				<Button component={Link} href="/api/oauth/stripe/add">
					Connect Account
				</Button>
			</>
		</Card>
	);
};

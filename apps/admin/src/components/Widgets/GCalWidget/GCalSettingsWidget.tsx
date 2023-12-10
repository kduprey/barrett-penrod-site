import { Text, Button, Card, Group, Badge } from "@mantine/core";
import Link from "next/link";

export const GCalSettingsWidget = () => {
	return (
		<Card>
			<Group justify="space-between">
				<Text>Google Calendar</Text>
				<Badge color="red">Disconnected</Badge>
			</Group>

			<>
				<Text fw={700}>Google Calendar is not set up.</Text>
				<Button component={Link} href="/api/oauth/google/add">
					Connect Account
				</Button>
			</>
		</Card>
	);
};

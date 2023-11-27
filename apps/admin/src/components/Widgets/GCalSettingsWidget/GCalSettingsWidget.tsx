import { Text, Button, Card, Group, Badge } from "@mantine/core";
import Link from "next/link";
import { GCalList } from "./GCalList";
import { getGCalAppCredentials } from "@/utils/gCal/credentials";

export const GCalSettingsWidget = async () => {
	const gCalCredentials = await getGCalAppCredentials();
	if (!gCalCredentials) {
		return (
			<Card>
				<Group justify="space-between">
					<h1>Google Calendar</h1>
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
	}

	return <GCalList />;
};

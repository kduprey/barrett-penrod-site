import { Text, Button, Card, Group, Badge, Title } from "@mantine/core";
import Link from "next/link";

export const ZoomSettingsWidget = () => {
	return (
		<Card>
			<Group justify="space-between">
				<Title>Zoom</Title>
				<Badge color="red">Disconnected</Badge>
			</Group>

			<>
				<Text fw={700} pb="sm">
					Zoom is not set up.
				</Text>
				<Button component={Link} href="/api/oauth/zoom/add">
					Connect Account
				</Button>
			</>
		</Card>
	);
};

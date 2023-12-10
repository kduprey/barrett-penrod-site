import { Text, Button, Card, Group, Badge } from "@mantine/core";
import Link from "next/link";

export const ZoomSettingsWidget = () => {
	return (
		<Card>
			<Group justify="space-between">
				<h1>Zoom </h1>
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

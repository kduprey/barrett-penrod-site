import { Text, Button, Card, Group, Badge } from "@mantine/core";
import Link from "next/link";
import { getZoomCredentials } from "@/utils/zoom/credentials";

export const ZoomSettingsWidget = async () => {
	const zoomCredentials = await getZoomCredentials();
	if (!zoomCredentials) {
		return (
			<Card>
				<Group justify="space-between">
					<h1>Zoom </h1>
					<Badge color="red">Disconnected</Badge>
				</Group>

				<>
					<Text fw={700}>Zoom is not set up.</Text>
					<Button component={Link} href="/api/oauth/zoom/add">
						Connect Account
					</Button>
				</>
			</Card>
		);
	}

	// return <GCalList />;
};

"use client";

import { Badge, Button, Card, Group, Stack, Title } from "@mantine/core";
import { disconnectZoom } from "./actions";
import type { ZoomGetUserId } from "@/utils/zoom/schemas";

export const ZoomAccountWidget = ({
	userData,
}: {
	userData: ZoomGetUserId;
}) => {
	// if (status === "pending" || disconnectStatus === "pending") {
	// 	return (
	// 		<Card>
	// 			<Group justify="space-between">
	// 				<h1>Zoom</h1>
	// 				<Badge color="green">Connected</Badge>
	// 			</Group>

	// 			<Loader type="dots" />
	// 		</Card>
	// 	);
	// }

	return (
		<Card>
			<Group justify="space-between">
				<Title>Zoom</Title>
				<Stack align="center" justify="flex-end">
					<Badge color="green">Connected</Badge>
					<Button
						color="red"
						onClick={async () => {
							await disconnectZoom();
						}}
						variant="subtle"
					>
						Disconnect
					</Button>
				</Stack>
			</Group>

			<>
				{userData.first_name} {userData.last_name} {userData.pronouns}
			</>
		</Card>
	);
};

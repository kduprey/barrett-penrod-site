import { Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import type { UseQueryResult } from "@tanstack/react-query";
import type { ZoomGetUserId } from "@/utils/zoom/schemas";

interface ConnectZoomStepProps {
	nextStep: () => void;
	zoomData: UseQueryResult<ZoomGetUserId | undefined>;
}

export const ConnectZoomStep = ({
	nextStep,
	zoomData: { isLoading, data },
}: ConnectZoomStepProps) => {
	if (isLoading) return <Text>Loading...</Text>;

	if (data?.account_id)
		return (
			<Group>
				<p>Connected!</p>
				<Button onClick={nextStep}>Next</Button>
			</Group>
		);

	return (
		<Button component={Link} href="/api/oauth/zoom/add?isFirstTime=true">
			Connect Account
		</Button>
	);
};

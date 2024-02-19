import { Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import type { UseQueryResult } from "@tanstack/react-query";

export const ConnectGCalStep = ({
	nextStep,
	gCalData: { isLoading, data },
}: {
	nextStep: () => void;
	gCalData: UseQueryResult<
		| {
				id: string;
				name: string | null | undefined;
				primary: boolean;
				readOnly: boolean;
				email: string | null | undefined;
				description: string | null | undefined;
				timeZone: string | null | undefined;
		  }[]
		| undefined
	>;
}) => {
	if (isLoading) return <Text>Loading...</Text>;

	if (data?.length)
		return (
			<Group>
				<Text>Connected!</Text>
				<Button onClick={nextStep}>Next</Button>
			</Group>
		);

	return (
		<Button component={Link} href="/api/oauth/google/add?isFirstTime=true">
			Connect Account
		</Button>
	);
};

"use client";

import { Alert, Button, Center, Space, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
	const router = useRouter();
	// Wait 5 seconds before redirecting to login

	useEffect(() => {
		console.info("Redirecting to login in 5 seconds...");

		setTimeout(() => {
			console.info("Redirecting to login...");

			router.push("/login");
		}, 5000);
	}, []);

	return (
		<Center h="100%">
			<Alert
				color="red"
				icon={<IconInfoCircle />}
				title="Not Found"
				variant="outline"
			>
				<Text>Could not find requested resource</Text>
				<Space h={20} />
				<Button
					color="gray"
					component={Link}
					href="/login"
					size="sm"
					variant="outline"
				>
					Return Home
				</Button>
			</Alert>
		</Center>
	);
};

export default NotFound;

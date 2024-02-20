import { Alert, Button, Container, Group, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { IconInfoCircle } from "@tabler/icons-react";
import { prisma } from "@bpvs/db";

const Page = async () => {
	const services = await prisma.serviceType.findMany();

	return (
		<Container fluid>
			<Group align="start" justify="space-between">
				<h1>Manage Services</h1>
				<Stack>
					<Button component={Link} href="/dashboard/bookings" variant="light">
						Back to Bookings Overview
					</Button>

					<Button component={Link} href="/dashboard/bookings/services/new">
						Create New Service
					</Button>
				</Stack>
			</Group>

			{services.length > 0 ? (
				<Group>
					{services.map((service) => (
						<Group key={service.id}>
							<Link href={`/dashboard/bookings/services/${service.id}`}>
								{service.name}
							</Link>
						</Group>
					))}
				</Group>
			) : (
				<Container pt="20%">
					<Alert
						color="red"
						icon={<IconInfoCircle />}
						title="No services created!"
						variant="outline"
					>
						<Text>You have not created any services yet.</Text>

						<Button
							component={Link}
							href="/dashboard/bookings/services/new"
							mt="xl"
						>
							Create New Service
						</Button>
					</Alert>
				</Container>
			)}
		</Container>
	);
};
export default Page;

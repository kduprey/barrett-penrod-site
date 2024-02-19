import { Button, Container, Group, Space, Title } from "@mantine/core";
import Link from "next/link";
import { TodaysBookingsWidget, WeeksBookingsWidget } from "@/components";

const Page = () => {
	return (
		<Container fluid>
			<Group justify="space-between" p="xs">
				<Title>Bookings</Title>
				<Button
					component={Link}
					href="/dashboard/bookings/services"
					variant="light"
				>
					Manage Services
				</Button>
			</Group>

			<TodaysBookingsWidget />
			<Space h={20} />
			<WeeksBookingsWidget />
		</Container>
	);
};
export default Page;

import {
	Badge,
	Button,
	Card,
	Container,
	Group,
	Text,
	Title,
} from "@mantine/core";

const Page = () => {
	return (
		<Container>
			<Title>Manage Your Account</Title>

			<Card>
				<Group justify="space-between" mb="xs" mt="md">
					<Text fw={500}>Connect your Google Calendar</Text>
					<Badge color="pink" variant="light">
						On Sale
					</Badge>
				</Group>

				<Text c="dimmed" size="sm">
					With Fjord Tours you can explore more of the magical fjord landscapes
					with tours and activities on and around the fjords of Norway
				</Text>

				<Button color="blue" fullWidth mt="md" radius="md" variant="light">
					Book classic tour now
				</Button>
			</Card>
		</Container>
	);
};

export default Page;

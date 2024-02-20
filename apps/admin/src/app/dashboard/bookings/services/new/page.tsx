import { Container, Title } from "@mantine/core";
import { prisma } from "@bpvs/db";
import { NewServiceForm } from "@/components";

const Page = async () => {
	const locations = await prisma.serviceLocations.findMany();
	const availabilities = await prisma.availabilitySchedule.findMany();

	return (
		<Container fluid>
			<Title>New Service</Title>

			<NewServiceForm {...{ availabilities, locations }} />
		</Container>
	);
};
export default Page;

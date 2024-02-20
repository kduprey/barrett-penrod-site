import { Container, Title } from "@mantine/core";
import { FirstTimeSetup } from "@/components";

const Page = () => {
	return (
		<Container fluid>
			<Title pb="md">Dashboard</Title>

			<FirstTimeSetup />
		</Container>
	);
};
export default Page;

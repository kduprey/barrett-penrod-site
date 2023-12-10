import { Container, Space } from "@mantine/core";
import { GCalWidget, ZoomWidget } from "@/components";

const Page = () => {
	return (
		<Container>
			<h1>Settings</h1>
			<GCalWidget />
			<Space h={20} />
			<ZoomWidget />
		</Container>
	);
};
export default Page;

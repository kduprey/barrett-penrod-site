import { Container } from "@mantine/core";
import { GCalAuthWidget } from "@/components";

const Page = () => {
	return (
		<Container>
			<h1>Settings</h1>
			<GCalAuthWidget />
		</Container>
	);
};
export default Page;

import { Container, Space } from "@mantine/core";
import { GCalWidget, ZoomWidget } from "@/components";
import { StripeWidget } from "@/components/Widgets/StripeWidget/StripeWidget";

const Page = () => {
	return (
		<Container>
			<h1>Settings</h1>
			<GCalWidget />
			<Space h={20} />
			<ZoomWidget />
			<Space h={20} />
			<StripeWidget />
		</Container>
	);
};
export default Page;

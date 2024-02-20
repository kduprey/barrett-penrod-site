import type { Meta } from "@storybook/react";
import { NewServiceForm } from "./NewServiceForm";

const meta: Meta<typeof NewServiceForm> = {
	component: NewServiceForm,
};

export default meta;

export const Usage = () => (
	<NewServiceForm availabilities={[]} locations={[]} />
);

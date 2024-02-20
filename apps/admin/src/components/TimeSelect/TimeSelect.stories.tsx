import type { Meta } from "@storybook/react";
import { TimeSelect } from "./TimeSelect";

const meta: Meta<typeof TimeSelect> = {
	component: TimeSelect,
};

export default meta;

export const Usage = () => <TimeSelect />;

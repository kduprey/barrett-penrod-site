import type { Meta } from "@storybook/react";

import { ZoomAccountWidget } from "./ZoomAccountWidget";

const meta: Meta<typeof ZoomAccountWidget> = {
	component: ZoomAccountWidget,
};

export default meta;

export const Usage = () => (
	<ZoomAccountWidget
		{...{
			userData: {
				type: 1,
				first_name: "Test",
				last_name: "User",
				email: "test_user@test.com",
			},
		}}
	/>
);

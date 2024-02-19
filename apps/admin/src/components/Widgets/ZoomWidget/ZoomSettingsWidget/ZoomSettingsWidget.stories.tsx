import type { Meta } from "@storybook/react";
import { ZoomSettingsWidget } from "./ZoomSettingsWidget";

const meta: Meta<typeof ZoomSettingsWidget> = {
	component: ZoomSettingsWidget,
};

export default meta;

export const Usage = () => <ZoomSettingsWidget />;

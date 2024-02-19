// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import React, { useEffect } from "react";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { MantineProvider, useMantineColorScheme } from "@mantine/core";
// theme.ts file from previous step
import { theme } from "../src/theme";

const channel = addons.getChannel();

const ColorSchemeWrapper = ({ children }: { children: React.ReactNode }) => {
	const { setColorScheme } = useMantineColorScheme();
	const handleColorScheme = (value: boolean) => {
		setColorScheme(value ? "dark" : "light");
	};

	useEffect(() => {
		channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
		return () => {
			channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
		};
	}, [channel]);

	return <>{children}</>;
};

export const decorators = [
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- ignore
	(renderStory: any) => (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call -- ignore
		<ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
	),
	// eslint-disable-next-line @typescript-eslint/no-explicit-any -- ignore
	(renderStory: any) => (
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call -- ignore
		<MantineProvider theme={theme}>{renderStory()}</MantineProvider>
	),
];

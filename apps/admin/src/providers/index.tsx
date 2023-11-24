import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type { PropsWithChildren } from "react";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { theme } from "@/theme";

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<ReactQueryProvider>
			<MantineProvider defaultColorScheme="auto" theme={theme}>
				<Notifications />
				{children}
			</MantineProvider>
		</ReactQueryProvider>
	);
};

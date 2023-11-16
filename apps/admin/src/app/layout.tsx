import type { PropsWithChildren } from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { theme } from "../theme";
import { PageWrapper } from "@/components/PageWrapper/PageWrapper";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.css";

export const metadata = {
	title: "Mantine Next.js template",
	description: "I am using Mantine with Next.js!",
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript />
				<link href="/favicon.svg" rel="shortcut icon" />
				<meta
					content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
					name="viewport"
				/>
			</head>
			<body>
				<MantineProvider theme={theme}>
					<Notifications />
					<PageWrapper>{children}</PageWrapper>
				</MantineProvider>
			</body>
		</html>
	);
};
export default RootLayout;

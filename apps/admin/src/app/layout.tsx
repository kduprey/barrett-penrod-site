import type { PropsWithChildren } from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { theme } from "../theme";

export const metadata = {
	title: "Mantine Next.js template",
	description: "I am using Mantine with Next.js!",
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<ClerkProvider
				publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
				signInUrl={`/login`}
				signUpUrl={`/sign-up`}
				afterSignInUrl="/dashboard"
				afterSignUpUrl="/dashboard"
			>
				<head>
					<ColorSchemeScript defaultColorScheme="auto" />
					<link href="/favicon.svg" rel="shortcut icon" />
					<meta
						content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
						name="viewport"
					/>
				</head>
				<body>
					<MantineProvider defaultColorScheme="auto" theme={theme}>
						<Notifications />
						{children}
					</MantineProvider>
				</body>
			</ClerkProvider>
		</html>
	);
};
export default RootLayout;

import type { PropsWithChildren } from "react";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/providers";

export const metadata = {
	title: "Mantine Next.js template",
	description: "I am using Mantine with Next.js!",
};

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="en">
			<ClerkProvider
				afterSignInUrl="/dashboard"
				afterSignUpUrl="/dashboard"
				publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
				signInUrl="/login"
				signUpUrl="/sign-up"
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
					<Providers>{children}</Providers>
				</body>
			</ClerkProvider>
		</html>
	);
};
export default RootLayout;

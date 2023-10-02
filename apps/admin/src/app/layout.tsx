// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components";

export const metadata = {
	title: "My Mantine app",
	description: "I have followed setup instructions carefully",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClerkProvider>
			<html lang="en">
				<head>
					<ColorSchemeScript />
				</head>
				<body>
					<MantineProvider defaultColorScheme="auto">
						<Navbar />

						{children}
					</MantineProvider>
				</body>
			</html>
		</ClerkProvider>
	);
};

export default RootLayout;

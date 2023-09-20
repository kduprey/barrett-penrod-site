import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { PropsWithChildren } from "react";
import "./globals.css";
import { Footer, PageBar, SocialBar } from "@/components";

config.autoAddCss = false;

export { useReportWebVitals } from "next-axiom";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: {
		default: "Barrett Penrod · Actor, Singer, Voice Instructor, and Director",
		template: "%s · Barrett Penrod",
	},
	description:
		"Barrett Penrod is an actor, singer working professionally in the NYC area; voice instructor and singing voice specialist available for immediate booking.",
	referrer: "no-referrer",
	viewport: "width=device-width, initial-scale=1",
	robots: "index, follow",
	alternates: {
		canonical: "https://barrettpenrod.com",
		languages: {
			"en-US": "https://barrettpenrod.com",
		},
	},
	manifest: "/favicons/manifest.json",
	appleWebApp: {
		statusBarStyle: "black-translucent",
		title: "Barrett Penrod · Actor, Singer, Voice Instructor, and Director",
	},
	formatDetection: {
		telephone: true,
		date: true,
		address: true,
		email: true,
		url: true,
	},
};

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => (
	<html className={`${montserrat.variable}`} lang="en">
		<body>
			<main className="flex min-h-screen flex-col bg-primary">
				<PageBar />

				<SocialBar />
				{children}
				<Footer />
			</main>
		</body>
	</html>
);

// {getLayout(<Component {...pageProps} />)}

export default RootLayout;

import { AppPropsWithLayout } from "@bpvs/types";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Montserrat } from "@next/font/google";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import "../styles/globals.css";
config.autoAddCss = false;

export { reportWebVitals } from "next-axiom";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const router = useRouter();
	const handleRouteChange = (url: URL) => {
		// eslint-disable-next-line
		// @ts-ignore
		window.gtag("config", process.env.NEXT_PUBLIC_GA_ID as string, {
			page_path: url,
		});
	};

	useEffect(() => {
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	const getLayout = Component.getLayout || ((page) => page);

	return (
		<main className={`${montserrat.variable}`}>
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-KFM4XGBGYY"
			/>
			<Script
				id="gtm-script"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
	  						function gtag(){dataLayer.push(arguments);}
	 						gtag('js', new Date());

	  						gtag('config', 'G-KFM4XGBGYY');`,
				}}
			/>
			{getLayout(<Component {...pageProps} />)}
		</main>
	);
}

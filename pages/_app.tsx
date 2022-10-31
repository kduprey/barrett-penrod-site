import "@fontsource/montserrat/100-italic.css";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200-italic.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300-italic.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400-italic.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500-italic.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600-italic.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700-italic.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800-italic.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900-italic.css";
import "@fontsource/montserrat/900.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import "../styles/globals.css";
import { AppPropsWithLayout } from "../types/types";
config.autoAddCss = false;

export { reportWebVitals } from "next-axiom";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const router = useRouter();
	const handleRouteChange = (url: URL) => {
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
		<>
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
		</>
	);
}

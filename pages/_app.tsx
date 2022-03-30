import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/montserrat/100-italic.css";
import "@fontsource/montserrat/200-italic.css";
import "@fontsource/montserrat/300-italic.css";
import "@fontsource/montserrat/400-italic.css";
import "@fontsource/montserrat/500-italic.css";
import "@fontsource/montserrat/600-italic.css";
import "@fontsource/montserrat/700-italic.css";
import "@fontsource/montserrat/800-italic.css";
import "@fontsource/montserrat/900-italic.css";
import "../styles/globals.css";
import { AppProps } from "next/app";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

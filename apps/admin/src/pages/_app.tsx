import { ClerkProvider } from "@clerk/nextjs";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useMantineTheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { getCookie, setCookie } from "cookies-next";
import NextApp, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const preferredColorScheme = useColorScheme();
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  const theme = useMantineTheme();

  return (
    <>
      <Head>
        <title>BPVS - Admin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="Admin for BPVS" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme,
          }}
        >
          <ClerkProvider
            appearance={{
              layout: {
                socialButtonsVariant: "iconButton",
                logoPlacement: "inside",
              },
              variables: {
                colorPrimary:
                  colorScheme === "light" ? theme.black : theme.white,
                colorBackground:
                  colorScheme === "light" ? theme.white : theme.black,
              },
            }}
          >
            <Component {...pageProps} />
          </ClerkProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie("mantine-color-scheme", appContext.ctx),
  };
};

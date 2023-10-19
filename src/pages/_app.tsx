import { useState } from "react";

import type { AppProps } from "next/app";
import "@/styles/globals.css";
import AppContext from "@/context/AppContext";
import Layout from "@/components/Layout";

import { Montserrat } from "@next/font/google";
import { NextFontWithVariable } from "@next/font";

const mainFont: NextFontWithVariable = Montserrat({
  subsets: ["latin"],
  variable: "--font-main-font",
});

export default function App({ Component, pageProps }: AppProps) {
  const [menuActive, setMenuActive] = useState(false);
  const [navigation, setNavigation] = useState(false);
  return (
    <AppContext.Provider
      value={{ menuActive, setMenuActive, navigation, setNavigation }}
    >
      <Layout font={mainFont}>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

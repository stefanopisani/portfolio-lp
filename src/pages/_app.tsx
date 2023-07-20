import { useState } from "react";

import type { AppProps } from "next/app";
import "@/styles/globals.css";
import AppContext from "@/context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  const [menuActive, setMenuActive] = useState(false);
  const [navigation, setNavigation] = useState(false);
  return (
    <AppContext.Provider
      value={{ menuActive, setMenuActive, navigation, setNavigation }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

import { NextFontWithVariable } from "@next/font";
import React, { useContext } from "react";
import Header from "./Header";
import AppContext from "@/context/AppContext";
import Footer from "./Footer";

type Props = { children: any; font: NextFontWithVariable };

function Layout({ children, font }: Props) {
  const { menuActive, navigation } = useContext(AppContext);
  return (
    <>
      <Header />
      {!menuActive ? (
        <main className={`${font.variable}`}>{children}</main>
      ) : null}
      {!menuActive && navigation ? <Footer /> : null}
    </>
  );
}

export default Layout;

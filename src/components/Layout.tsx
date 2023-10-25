import { NextFontWithVariable } from "@next/font";
import React, { useContext } from "react";
import Header from "./Header";
import AppContext from "@/context/AppContext";

type Props = { children: any; font: NextFontWithVariable };

function Layout({ children, font }: Props) {
  const { menuActive } = useContext(AppContext);
  return (
    <>
      <Header />
      {!menuActive ? <main className={font.variable}>{children}</main> : null}
    </>
  );
}

export default Layout;

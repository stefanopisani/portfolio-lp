import { NextFontWithVariable } from "@next/font";
import React, { useContext } from "react";
import Header from "./Header";
import AppContext from "@/context/AppContext";

type Props = { children: any; font: NextFontWithVariable };

function Layout({ children, font }: Props) {
  const { menuActive } = useContext(AppContext);
  return (
    <div className="min-h-screen">
      <Header />
      {!menuActive ? (
        <main className={`${font.variable}`}>{children}</main>
      ) : null}
    </div>
  );
}

export default Layout;

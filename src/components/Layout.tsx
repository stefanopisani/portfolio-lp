import { NextFontWithVariable } from "@next/font";
import React from "react";

type Props = { children: any; font: NextFontWithVariable };

function Layout({ children, font }: Props) {
  return (
    <div>
      <main className={font.variable}>{children}</main>
    </div>
  );
}

export default Layout;

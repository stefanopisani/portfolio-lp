import React from "react";

type Props = { children: any };

function Layout({ children }: Props) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;

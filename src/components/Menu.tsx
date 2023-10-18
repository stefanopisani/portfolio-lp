import AppContext from "@/context/AppContext";
import Link from "next/link";
import React, { useContext } from "react";

type Props = {};

function Menu({}: Props) {
  const { setMenuActive, setNavigation } = useContext(AppContext);

  return (
    <div className="grid h-screen bg-white text-black place-items-center">
      <ul>
        <li className="menu">
          <Link
            href={"/about"}
            onClick={() => {
              setMenuActive(false);
              setNavigation(true);
            }}
          >
            About
          </Link>
        </li>
        <li className="menu">
          {" "}
          <Link
            href={"/projects"}
            onClick={() => {
              setMenuActive(false);
              setNavigation(true);
            }}
          >
            Projects
          </Link>
        </li>
        <li className="menu">Gallery</li>
        <li className="menu">Contacts</li>
      </ul>
    </div>
  );
}

export default Menu;
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
              setTimeout(() => {
                setMenuActive(false);
                setNavigation(true);
              }, 500);
            }}
          >
            About
          </Link>
        </li>
        <li className="menu">
          <Link
            href={"/projects"}
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
                setNavigation(true);
              }, 500);
            }}
          >
            Projects
          </Link>
        </li>
        <li className="menu">Gallery</li>
        <li className="menu">
          <Link
            href={"/contatti"}
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
                setNavigation(true);
              }, 500);
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

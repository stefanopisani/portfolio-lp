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
            href={"/studio"}
            onClick={() => {
              setTimeout(() => {
                setMenuActive(false);
                setNavigation(true);
              }, 500);
            }}
          >
            Studio
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
            Progetti
          </Link>
        </li>
        <li className="menu">News</li>
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
            Contatti
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

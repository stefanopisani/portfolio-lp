import AppContext from "@/context/AppContext";
import React, { useContext } from "react";

export default function Header() {
  const { menuActive, setMenuActive, navigation } = useContext(AppContext);
  const headerColor = navigation ? "black" : "white";
  return (
    <header
      className={
        "absolute w-full top-0 z-20 p-7 flex justify-between mx-auto xl:items-center"
      }
    >
      <div>
        <h1
          className={
            "font-sans text-2xl tracking-widest cursor-pointer text-" +
            (menuActive ? "black" : headerColor)
          }
          onClick={() => setMenuActive(false)}
        >
          LPA
        </h1>
      </div>
      <div
        className={
          "w-7 h-5 mt-2 flex flex-col justify-between cursor-pointer " +
          (menuActive && "active")
        }
        onClick={() => setMenuActive(!menuActive)}
      >
        <span
          className={
            "line " +
            (menuActive && "first-line-active ") +
            (navigation && " line-navigation")
          }
        ></span>
        <span
          className={
            "line " +
            (menuActive && "second-line-active ") +
            (navigation && " line-navigation")
          }
        ></span>
        <span
          className={
            "line " +
            (menuActive && "third-line-active ") +
            (navigation && " line-navigation")
          }
        ></span>
      </div>
    </header>
  );
}

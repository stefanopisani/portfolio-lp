import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  menuActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ menuActive, setMenuActive }: Props) {
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
            (menuActive ? "black" : "white")
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
        <span className={"line " + (menuActive && "first-line-active")}></span>
        <span className={"line " + (menuActive && "second-line-active")}></span>
        <span className={"line " + (menuActive && "third-line-active")}></span>
      </div>
    </header>
  );
}

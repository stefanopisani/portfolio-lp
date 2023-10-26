import AppContext from "@/context/AppContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Menu from "./Menu";
import Image from "next/image";

export default function Header() {
  const { menuActive, setMenuActive, navigation, setNavigation } =
    useContext(AppContext);
  const router = useRouter();
  const headerBorder = menuActive
    ? "border-none"
    : "border-b-[1px] border-gray-100";

  const handleLogoClick = () => {
    setMenuActive(false);
    setNavigation(false);
    router.push("/");
  };

  return (
    <>
      <header
        className={
          "fixed w-full top-0 z-20 pb-2 lg:pb-4 p-6 flex justify-between mx-auto xl:items-center " +
          (navigation && "bg-white " + headerBorder)
        }
      >
        <div onClick={() => handleLogoClick()}>
          <Image
            className="cursor-pointer"
            src="/01_LOGO_LP.png"
            alt="logo"
            width={30}
            height={30}
            priority
          />
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
      {menuActive ? <Menu /> : null}
    </>
  );
}

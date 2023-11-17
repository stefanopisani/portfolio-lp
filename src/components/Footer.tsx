import AppContext from "@/context/AppContext";
import React, { useContext } from "react";
import Image from "next/image";
import router from "next/router";

export default function Header() {
  const { menuActive, setMenuActive, navigation, setNavigation } =
    useContext(AppContext);

  const handleLogoClick = () => {
    setMenuActive(false);
    setNavigation(false);
    router.push("/");
  };

  return (
    <section className="grid place-items-center px-2">
      <div className="max-w-4xl w-full border-t-[0.5px] border-black pt-3 px-3 mb-3 text-base font-normal text-justify leading-normal flex justify-between">
        <Image
          className="cursor-pointer mt-[-40px] ml-[-35px]"
          src="/LP_BOLD_NERO.png"
          alt="logo"
          width={100}
          height={100}
          priority
          onClick={handleLogoClick}
        />
        <div className="sm:flex">
          <p className="sm:pr-5">IG</p>
          <p>TW</p>
        </div>

        <div>
          <p>email@gmail.com</p>
          <p>+39 08134567899</p>
        </div>
      </div>
    </section>
  );
}

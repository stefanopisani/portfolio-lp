import AppContext from "@/context/AppContext";
import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const { menuActive, setMenuActive, navigation, setNavigation } =
    useContext(AppContext);
  const router = useRouter();

  const handleLogoClick = () => {
    setMenuActive(false);
    setNavigation(false);
    router.push("/");
  };

  return (
    <section className="grid place-items-center px-2 mt-[50px]">
      <div className="max-w-4xl w-full border-t-[0.75px] border-black flex justify-between pt-3 px-3 mb-3 text-sm sm:text-base font-extralight text-justify leading-relaxed">
        <div onClick={() => handleLogoClick()}>
          <Image
            className="cursor-pointer h-[35px] sm:h-[45px] w-auto mt-1"
            src="/LP_NERO.png"
            alt="logo"
            width={0}
            height={0}
            unoptimized
          />
        </div>
        <div>
          <p>Instagram</p>
          <p>Linkedin</p>
        </div>

        <div className="grid place-content-center">
          <p>email@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

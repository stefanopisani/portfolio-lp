import AppContext from "@/context/AppContext";
import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const { setMenuActive, setNavigation } = useContext(AppContext);
  const router = useRouter();

  const handleLogoClick = () => {
    setMenuActive(false);
    setNavigation(false);
    router.push("/");
  };

  return (
    <section className="grid place-items-center px-2 mt-[50px]">
      <div className="max-w-4xl w-full border-t-[0.75px] border-black flex justify-between pt-3 px-3 mb-3 text-sm sm:text-base font-light text-justify leading-relaxed">
        <div onClick={() => handleLogoClick()}>
          <Image
            className="cursor-pointer h-[35px] sm:h-[45px] w-auto mt-1 hover:animate-pulse"
            src="/LP_NERO.png"
            alt="logo"
            width={0}
            height={0}
            unoptimized
          />
        </div>
        <div>
          <a
            className="block hover:font-normal"
            href="https://www.instagram.com"
          >
            Instagram
          </a>
          <a
            className="block hover:font-normal"
            href="https://www.linkedin.com"
          >
            Linkedin
          </a>
        </div>

        <div className="grid place-content-center hover:font-normal">
          <a href="mailto:info@lpstudiodiarchitettura.com">
            info@lpstudiodiarchitettura.com
          </a>
        </div>
      </div>
    </section>
  );
}

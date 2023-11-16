import AppContext from "@/context/AppContext";
import React, { useContext } from "react";

export default function Header() {
  const { menuActive, setMenuActive, navigation, setNavigation } =
    useContext(AppContext);

  return (
    <section className="grid place-items-center px-2">
      <div className="max-w-4xl w-full border-t-[0.5px] border-black flex justify-between pt-3 px-3 mb-3 text-lg font-thin text-justify leading-relaxed">
        <p>LP</p>
        <div className="sm:flex">
          <p className="sm:pr-5">IG</p>
          <p>TW</p>
        </div>

        <div>
          <p>email@gmail.com</p>
          <p>081-345678</p>
        </div>
      </div>
    </section>
  );
}

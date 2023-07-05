import React, { useState } from "react";

type Props = {
};

export default function Header({}: Props) {
    const [isMenuActive, setIsMenuActive] = useState(false)

    const setMenuActive = ()=> {
        setIsMenuActive(!isMenuActive)
        console.log('isMenuActive', isMenuActive)
    }

  return (
    <header className={"absolute w-full top-0 z-20 p-7 flex justify-between mx-auto xl:items-center " + (isMenuActive && "active")}>
      <div>
        <h1 className="font-sans text-2xl text-white tracking-widest">LP Architecture</h1>
      </div>
      <div className="w-7 h-5 mt-2 flex flex-col justify-between cursor-pointer" onClick={setMenuActive}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </header>
  );
}

 /* {isAbsolute? 'absolute' : 'sticky' + "w-full top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center"} */

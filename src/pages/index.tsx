import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [shouldShowIntro, setShouldShowIntro] = useState(true);
  const [menuActive, setMenuActive] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setShouldShowIntro(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Head>
        <title> LP Architecture</title>
      </Head>

      {shouldShowIntro ? (
        <Intro />
      ) : (
        <>
          <Header menuActive={menuActive} setMenuActive={setMenuActive}/>
          {menuActive ? <Menu /> : <Hero />}
          
          {/* ABOUT */}
          {/* PROJECTS */}
          {/* CONTACTS */}
          
          
          
        </>
      )}
    </div>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";

export default function Home() {
  const { menuActive, navigation } = useContext(AppContext);
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShouldShowIntro(false);
    }, 1000);
  }, []);

  const displayHero = !navigation ? <Hero /> : null;
  return (
    <div>
      <Head>
        <title> LP Architecture</title>
      </Head>

      {shouldShowIntro ? (
        <Intro />
      ) : (
        <>
          <Header />
          {menuActive ? <Menu /> : displayHero}
        </>
      )}
    </div>
  );
}

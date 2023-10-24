import Header from "@/components/Header";
import Hero, { Project } from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";

export const slidesDesktop: Project[] = [
  { url: "/VIETRI1.jpg", id: 1, title: "Palazzo Due" },
  { url: "/VIETRI2.jpg", id: 2, title: "Chalet Bello" },
  { url: "/VIETRI3.jpg", id: 3, title: "Villa Ipsilon" },
  { url: "/VIETRI4.jpg", id: 4, title: "Casa Beta" },
  { url: "/VIETRI5.jpg", id: 5, title: "Edificio Epsylon" },
];

export const slidesMobile: Project[] = [
  { url: "/q/D10NOTTE.png", id: 6, title: "Edificio Notte" },
  { url: "/q/D10BALLATOIO.png", id: 1, title: "Palazzo Uno" },
  { url: "/q/D10CORTE.png", id: 2, title: "Chalet Bello" },
  { url: "/q/EDLATO.png", id: 3, title: "Villa Ipsilon" },
  { url: "/q/MARCONI1.png", id: 4, title: "Casa Beta" },
  { url: "/q/MARCONI2.png", id: 5, title: "Edificio Epsylon" },
];

export default function Home() {
  const [width, setWidth] = useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const slides = isMobile ? slidesMobile : slidesDesktop;

  const { menuActive, navigation } = useContext(AppContext);
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShouldShowIntro(false);
    }, 1000);
  }, []);

  const displayHero = !navigation ? <Hero slides={slides} /> : null;
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

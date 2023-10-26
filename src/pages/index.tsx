import Hero, { Project } from "@/components/Hero";
import Intro from "@/components/Intro";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import useCheckMobile from "../../hooks/useCheckMobile";

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
  const { setNavigation } = useContext(AppContext);
  const [shouldShowIntro, setShouldShowIntro] = useState(true);
  const isMobile = useCheckMobile();

  useEffect(() => {
    setNavigation(false);
  }, [setNavigation]);

  useEffect(() => {
    setTimeout(() => {
      setShouldShowIntro(false);
    }, 1600);
  }, []);

  const slides = isMobile ? slidesMobile : slidesDesktop;

  return (
    <div>
      <Head>
        <title> LP Architecture</title>
      </Head>
      {shouldShowIntro ? <Intro /> : <Hero slides={slides} />}
    </div>
  );
}

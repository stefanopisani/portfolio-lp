import Hero, { Project } from "@/components/Hero";
import Intro from "@/components/Intro";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import useCheckMobile from "../../hooks/useCheckMobile";

export const slidesDesktop: Project[] = [
  { url: "/desktop/1.png", id: 1, title: "Edificio Notte" },
  { url: "/desktop/2.png", id: 2, title: "Chalet Bello" },
  { url: "/desktop/3.png", id: 3, title: "Villa Ipsilon" },
  { url: "/desktop/4.png", id: 4, title: "Casa Beta" },
  { url: "/desktop/5.png", id: 5, title: "Edificio Epsylon" },
  { url: "/desktop/6.png", id: 6, title: "Edificio Epsylon" },
  { url: "/desktop/7.png", id: 7, title: "Edificio Epsylon" },
  { url: "/desktop/8.png", id: 8, title: "Edificio Epsylon" },
  { url: "/desktop/9.png", id: 9, title: "Edificio Epsylon" },
  { url: "/desktop/10.png", id: 10, title: "Edificio Epsylon" },
];

export const slidesMobile: Project[] = [
  { url: "/mobile/1.png", id: 0, title: "Edificio Notte" },
  { url: "/mobile/2.png", id: 1, title: "Palazzo Uno" },
  { url: "/mobile/3.png", id: 2, title: "Chalet Bello" },
  { url: "/mobile/4.png", id: 3, title: "Villa Ipsilon" },
  { url: "/mobile/5.png", id: 4, title: "Casa Beta" },
  { url: "/mobile/6.png", id: 5, title: "Edificio Epsylon" },
  { url: "/mobile/7.png", id: 6, title: "Edificio Epsylon" },
  { url: "/mobile/8.png", id: 7, title: "Edificio Epsylon" },
  { url: "/mobile/9.png", id: 8, title: "Edificio Epsylon" },
  { url: "/mobile/10.png", id: 9, title: "Edificio Epsylon" },
  { url: "/mobile/11.png", id: 10, title: "Edificio Epsylon" },
  { url: "/mobile/12.png", id: 11, title: "Edificio Epsylon" },
  { url: "/mobile/13.png", id: 12, title: "Edificio Epsylon" },
  { url: "/mobile/14.png", id: 13, title: "Edificio Epsylon" },
  { url: "/mobile/15.png", id: 14, title: "Edificio Epsylon" },
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

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

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
          {/* HEADER */}
          <Header />
          {/* SLIDESHOWS */}
          <Hero />
          {/* MENU CONTENT */}

          {/* ABOUT */}
          {/* PROJECTS */}
          {/* CONTACTS */}
        </>
      )}
    </div>
  );
}

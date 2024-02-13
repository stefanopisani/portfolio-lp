import Hero from "@/components/Hero";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import useCheckMobile from "../../hooks/useCheckMobile";
import Carousel from "@/components/Carousel";

const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function Home() {
  const { setNavigation } = useContext(AppContext);
  const [results, setResults] = useState([]);
  const isMobile = useCheckMobile();

  useEffect(() => {
    (async function run() {
      const queryParam = isMobile ? "mobile" : "desktop";
      const results = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify({
          expression: `folder=Portfolio-lp/${queryParam}`,
        }),
      }).then((r) => r.json());
      const images = results.resources.map((resource: any) => {
        return {
          id: resource.asset_id,
          title: resource.public_id,
          image: resource.secure_url,
          width: resource.width,
          height: resource.height,
        };
      });
      shuffle(images);
      setResults(images);
    })();
  }, [isMobile]);

  useEffect(() => {
    setNavigation(false);
  }, [setNavigation]);

  return (
    <div>
      <Head>
        <title> LP Architecture</title>
      </Head>
      {/* {results && <Hero slides={results} />} */}
      {results && <Carousel slides={results} />}
    </div>
  );
}

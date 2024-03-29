import Hero from "@/components/Hero";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import useCheckMobile from "../../hooks/useCheckMobile";
import Carousel from "@/components/Carousel";

const orderImages = (images: any) => {
  images.sort((a: any, b: any) => {
    return a.title - b.title;
  });
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
        const title: string = resource.public_id;
        const titleNumber =
          queryParam === "mobile" ? title.substring(20) : title.substring(21);

        return {
          id: resource.asset_id,
          title: +titleNumber,
          image: resource.secure_url,
          width: resource.width,
          height: resource.height,
        };
      });
      orderImages(images);
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

import Hero from "@/components/Hero";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import useCheckMobile from "../../hooks/useCheckMobile";

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
      {results && <Hero slides={results} />}
    </div>
  );
}

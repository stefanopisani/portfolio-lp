import Header from "@/components/Header";
import Menu from "@/components/Menu";
import AppContext from "@/context/AppContext";
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

type Props = {};

function About({}: Props) {
  const { menuActive, setNavigation } = useContext(AppContext);
  useEffect(() => {
    setNavigation(true);
  }, []);

  return (
    <>
      {menuActive ? (
        <>
          <Header />
          <Menu />
        </>
      ) : (
        <>
          <div className="grid place-items-center ">
            <Header />
            <div className="mt-[120px] max-w-6xl flex">
              {/* immagine circolare */}
              <Image
                src={"/286677840_742950250178632_5887949890463256510_n.jpg"}
                alt="A London skyscraper"
                className="h-[400px] sm:w-[300px] w-auto"
                height={0}
                width={0}
                unoptimized
              />
              <div>
                <h1>LP Architecture</h1>
                <h1 className="my-3">
                  Creata da Luca Pisani Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Veniam corrupti debitis placeat numquam sint
                  sit saepe pariatur, blanditiis illum delectus hic nemo vel
                  nobis rem minima dignissimos, sequi illo necessitatibus? Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
                  ab optio obcaecati quam culpa, similique ducimus dolor
                  exercitationem laboriosam, fuga alias dolores debitis
                  praesentium consectetur assumenda delectus tenetur natus!
                </h1>

                <Link href={"/projects"} onClick={() => setNavigation(false)}>
                  Progetti
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;

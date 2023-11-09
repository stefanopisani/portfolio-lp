import AppContext from "@/context/AppContext";
import Image from "next/image";
import React, { useContext, useEffect } from "react";

type Props = {};

function About({}: Props) {
  const { menuActive, setNavigation } = useContext(AppContext);
  useEffect(() => {
    setNavigation(true);
  }, []);

  return (
    <div className="grid place-items-center ">
      <div className="mt-[120px] max-w-6xl flex flex-wrap place-content-center">
        {/* immagine circolare */}
        <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-5">
          <Image
            src={"/286677840_742950250178632_5887949890463256510_n.jpg"}
            alt="Foto LP Studio"
            fill
            className="rounded-full h-[400px] sm:w-[300px] w-auto"
          />
        </div>
        <div className="sm:text-center max-[674px]:mx-3">
          <h1 className="my-3">
            Creata da Luca Pisani Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam corrupti debitis placeat numquam sint sit
            saepe pariatur, blanditiis illum delectus hic nemo vel nobis rem
            minima dignissimos, sequi illo necessitatibus? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Excepturi ab optio obcaecati
            quam culpa, similique ducimus dolor exercitationem laboriosam, fuga
            alias dolores debitis praesentium consectetur assumenda delectus
            tenetur natus!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default About;

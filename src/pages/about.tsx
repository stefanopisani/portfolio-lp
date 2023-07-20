import Header from "@/components/Header";
import Menu from "@/components/Menu";
import AppContext from "@/context/AppContext";
import Link from "next/link";
import React, { useContext } from "react";

type Props = {};

function About({}: Props) {
  const { menuActive, setNavigation } = useContext(AppContext);

  return (
    <>
      {menuActive ? (
        <>
          <Header />
          <Menu />
        </>
      ) : (
        <>
          <Header />
          <div className="grid h-screen place-items-center max-w-7xl">
            <div className="mx-3">
              {/* immagine circolare */}
              <h1>LP Architecture</h1>
              <h1 className="my-3">
                Creata da Luca Pisani Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Veniam corrupti debitis placeat numquam sint
                sit saepe pariatur, blanditiis illum delectus hic nemo vel nobis
                rem minima dignissimos, sequi illo necessitatibus? Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Excepturi ab optio
                obcaecati quam culpa, similique ducimus dolor exercitationem
                laboriosam, fuga alias dolores debitis praesentium consectetur
                assumenda delectus tenetur natus!
              </h1>

              <Link href={"/projects"} onClick={() => setNavigation(false)}>
                Progetti
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;

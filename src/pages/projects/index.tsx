import Header from "@/components/Header";
import Menu from "@/components/Menu";
import AppContext from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import { slides as projects } from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

function Projects() {
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
        <div className="grid place-items-center">
          <Header />
          <div className="mt-[120px] max-w-6xl flex flex-wrap justify-between px-10">
            {projects.map((project) => (
              <section
                className="mb-10 cursor-pointer sm:max-w-[300px]"
                key={project.id}
              >
                <Link href={`/projects/${project.id}`}>
                  <Image
                    src={`${project.url}`}
                    alt="A London skyscraper"
                    className="h-[400px] sm:w-[300px] w-auto"
                    height={0}
                    width={0}
                    unoptimized
                  />
                </Link>
                <h2 className="text-lg tracking-wider text-center uppercase mt-2">
                  {project.title}
                </h2>
                <h2 className="p-3 sm:p-1 font-extralight text-center uppercase">
                  Lorem ipsum dolor sit amet
                </h2>
              </section>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import projects from "../../../public/archive/projects.json";
import AppContext from "@/context/AppContext";

function Projects() {
  const { setNavigation } = useContext(AppContext);

  useEffect(() => {
    setNavigation(true);
  }, []);

  return (
    <div className="grid place-items-center">
      <div className="sm:mt-[170px] mt-[120px] max-w-7xl place-items-center grid sm:grid-cols-3 sm:gap-[100px] mb-10 px-3">
        {projects.data.map((project: any) => (
          <section
            className="cursor-pointer w-auto sm:max-w-[300px] sm:col-span-1 mb-[50px] sm:mb-0"
            key={project.id}
          >
            <Link href={`/projects/${project.id}`}>
              <Image
                src={`${project.image}`}
                alt="A London skyscraper"
                className="sm:h-[300px] h-auto w-auto grayscale-[75%] hover:grayscale-0 rounded-sm"
                height={0}
                width={0}
                unoptimized
              />
            </Link>
            <h2 className="text-sm tracking-widest text-center uppercase mt-2">
              {project.name}
            </h2>
            <h2 className="text-xs tracking-wider font-extralight text-center uppercase">
              {project.info}
            </h2>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Projects;

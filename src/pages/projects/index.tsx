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
      <div className="mt-[120px] max-w-6xl flex flex-wrap place-items-center md:justify-between px-3">
        {projects.data.map((project: any) => (
          <section
            className="mb-10 cursor-pointer sm:max-w-[300px]"
            key={project.id}
          >
            <Link href={`/projects/${project.id}`}>
              <Image
                src={`${project.image}`}
                alt="A London skyscraper"
                className="h-[400px] sm:w-[300px] w-auto"
                height={0}
                width={0}
                unoptimized
              />
            </Link>
            <h2 className="text-lg tracking-wider text-center uppercase mt-3">
              {project.name}
            </h2>
            <h2 className="pt-2 p-3 sm:p-1 font-extralight text-center uppercase">
              {project.info}
            </h2>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Projects;

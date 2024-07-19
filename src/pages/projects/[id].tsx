import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AppContext from "@/context/AppContext";
import projects from "../../../public/archive/galleria.json";
import Image from "next/image";

type Props = {};

function ProjectPage() {
  const { menuActive, setNavigation } = useContext(AppContext);
  const router = useRouter();
  const projectIndex = Number(router.query.id);
  const project = projects.data.find(
    (project) => project.id === `${projectIndex}`
  );

  useEffect(() => {
    setNavigation(true);
  }, []);

  return (
    <div className="grid place-items-center tracking-wide sm:tracking-wider mt-[90px]">
      <div className="z-50 top-5 sticky">
        <h2 className="text-md tracking-widest text-center uppercase">
          {project?.name}
        </h2>
        <h2 className="text-sm tracking-wider font-extralight text-center uppercase mb-2">
          {project?.description}
        </h2>
      </div>
      {project?.imgs.map((project) => (
        <>
          <div className="max-w-4xl px-3 mb-[30px]">
            <Image
              src={`${project.image}`}
              alt="A London skyscraper"
              className="h-auto w-auto rounded-sm grid-cols-4"
              loading="eager"
              width={0}
              height={0}
              priority
              unoptimized
              onLoad={() => console.log("image loaded")}
            />
          </div>
        </>
      ))}
    </div>
  );
}

export default ProjectPage;

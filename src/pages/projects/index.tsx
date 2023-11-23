import React, { useContext, useEffect } from "react";
import projects from "../../../public/archive/projects.json";
import AppContext from "@/context/AppContext";
import Project from "@/components/Project";

function Projects() {
  const { setNavigation } = useContext(AppContext);

  useEffect(() => {
    setNavigation(true);
  }, []);

  return (
    <div className="grid place-items-center">
      <div className="sm:mt-[170px] mt-[120px] max-w-7xl place-items-center grid sm:grid-cols-3 sm:gap-[100px] mb-10 px-3">
        {projects.data.map((project: any, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

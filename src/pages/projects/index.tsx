import Header from "@/components/Header";
import Menu from "@/components/Menu";
import AppContext from "@/context/AppContext";
import React, { useContext, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { slides as projects } from "@/components/Hero";
import Link from "next/link";
import { Project } from "@/components/Hero";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Project({ project }: { project: Project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 250);

  return (
    <section className="mb-10 max-w-xl">
      <div ref={ref} className="cursor-pointer">
        <Link href={`/projects/${project.url}`}>
          <img
            src={project.url}
            alt="A London skyscraper"
            className="h-[400px]"
          />
        </Link>
        <motion.h2
          style={{ y }}
          className="mt-[-50px] mb-[50px] text-2xl text-white"
        >
          {project.title}
        </motion.h2>
        <motion.h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus at
          repellendus debitis nam, atque quo in impedit possimus obcaecati
          perferendis fuga natus quaerat praesentium laboriosam. Voluptate magni
          consequuntur amet sed.
        </motion.h2>
      </div>
    </section>
  );
}

function Projects() {
  const { menuActive } = useContext(AppContext);
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
          <div className="mt-[100px] mb-[150px]">
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;

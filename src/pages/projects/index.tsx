import Header from "@/components/Header";
import Menu from "@/components/Menu";
import AppContext from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
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
          <div className="mt-[120px]">
            {projects.map((project) => (
              <section className="mb-10 max-w-xl" key={project.id}>
                <div className="cursor-pointer">
                  <Link href={`/projects/${project.id}`}>
                    <Image
                      src={`${project.url}`}
                      alt="A London skyscraper"
                      className="h-[400px] w-auto"
                      height={0}
                      width={0}
                      unoptimized
                    />
                  </Link>
                  <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.7 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-[-50px] ml-2 mb-[50px] text-2xl text-white tracking-wider"
                  >
                    {project.title}
                  </motion.h2>
                  <h2 className="p-3 sm:p-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Accusamus at repellendus debitis nam, atque quo in impedit
                    possimus obcaecati perferendis fuga natus quaerat
                    praesentium laboriosam. Voluptate magni consequuntur amet
                    sed.
                  </h2>
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;

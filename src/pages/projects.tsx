import Header from "@/components/Header";
import Menu from "@/components/Menu";
import AppContext from "@/context/AppContext";
import React, { useContext, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { slides } from "@/components/Hero";
import Link from "next/link";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Project({ slide }: { slide: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section className="mb-10 max-w-xl">
      <div ref={ref} className="cursor-pointer">
        <Link href={"/project"}>
          <img
            src={slide.url}
            alt="A London skyscraper"
            className="h-[350px]"
          />
        </Link>
        <motion.h2
          style={{ y }}
          className="mt-[-50px] mb-[50px] text-2xl text-white"
        >
          {slide.title}
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
        <div className="grid h-screen place-items-center mb-[200px]">
          <Header />
          <div className="mt-[100px]">
            {slides.map((slide) => (
              <Project key={slide.id} slide={slide} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;

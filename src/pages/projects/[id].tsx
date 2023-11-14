import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AppContext from "@/context/AppContext";
import projects from "../../../public/archive/projects.json";
import { motion } from "framer-motion";

type Props = {};

function ProjectPage() {
  const { menuActive, setNavigation } = useContext(AppContext);
  const router = useRouter();
  const projectIndex = Number(router.query.id);
  // const project = projects.data.find((slide) => slide.id === projectIndex);

  useEffect(() => {
    setNavigation(true);
  }, []);

  return (
    <div className="h-screen grid place-items-center">
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        Pagina in manutenzione
      </motion.h1>
    </div>
  );
}

export default ProjectPage;

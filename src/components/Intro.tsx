import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Intro({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        duration: 1.5,
        delay: 1,
      }}
      viewport={{ once: true }}
      className="bg-[rgb(6,6,6)] text-white h-screen"
    >
      <div className="grid h-screen place-items-center">
        <h1 className="text-3xl tracking-widest">LP Architecture</h1>
      </div>
    </motion.div>
  );
}

export default Intro;

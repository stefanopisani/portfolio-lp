import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function Intro({}: Props) {
  return (
    <div className="h-screen m-auto relative group z-50">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          ease: "linear",
          delay: 3,
          duration: 1,
        }}
        viewport={{ once: true }}
        className="bg-[rgb(6,6,6)] text-white h-screen"
      >
        <div className="grid h-screen place-items-center">
          <Image
            src="/01_LOGO_LP_SDA.png"
            alt="logo"
            className="h-[300px] sm:h-[600px] w-auto mt-0 sm:mt-[-50px]"
            height={0}
            width={0}
            unoptimized
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Intro;

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type Props = {};

function Hero({}: Props) {
  const slides = [
    { url: "/sito1.png" },
    { url: "/Esterna.jpg" },
    { url: "/sito2.png" },
    // { url: "/sito3.JPG" },
    { url: "/Notturna.jpg" },
    // { url: "/Ballatoio.jpg" },
    // { url: "/ED-HQ_MI_RENDER-INTERNO_3.png" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className="h-screen m-auto relative group"
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >

      </div>
      <div className="arrow left-5">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="arrow right-5">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </motion.div>
  );
}

export default Hero;

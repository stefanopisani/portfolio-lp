import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export type Project = {
  url: string;
  id: number;
  title: string;
};

export const slides: Project[] = [
  { url: "/sito1.png", id: 1, title: "Palazzo Uno" },
  { url: "/Esterna.jpg", id: 2, title: "Villa Ipsilon" },
  { url: "/sito2.png", id: 3, title: "Casa Beta" },
  // { url: "/sito3.JPG" },
  { url: "/Notturna.jpg", id: 4, title: "Edificio Notte" },
  // { url: "/Ballatoio.jpg" },
  // { url: "/ED-HQ_MI_RENDER-INTERNO_3.png" },
];
function Hero() {
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

  useEffect(() => {
    const intervalId = setInterval(() => nextSlide(), 1500);
    return () => clearInterval(intervalId);
  });

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
      ></div>
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

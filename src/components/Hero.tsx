import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export type Project = {
  url: string;
  id: number;
  title: string;
};

export const slides: Project[] = [
  { url: "/q/D10BALLATOIO.png", id: 1, title: "Palazzo Uno" },
  { url: "/q/D10CORTE.png", id: 2, title: "Chalet Bello" },
  { url: "/q/EDLATO.png", id: 3, title: "Villa Ipsilon" },
  { url: "/q/MARCONI1.png", id: 4, title: "Casa Beta" },
  { url: "/q/MARCONI2.png", id: 5, title: "Edificio Epsylon" },
  { url: "/q/D10NOTTE.png", id: 6, title: "Edificio Notte" },
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
    console.log(slides[currentIndex].url);
    const intervalId = setInterval(() => nextSlide(), 2500);
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

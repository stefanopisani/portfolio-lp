import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export type Project = {
  url: string;
  id: number;
  title: string;
};

type Props = {
  slides: Project[];
};

function Hero({ slides }: Props) {
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
    const intervalId = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="h-screen m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover"
      ></div>
      <div className="arrow left-5">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="arrow right-5">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default Hero;

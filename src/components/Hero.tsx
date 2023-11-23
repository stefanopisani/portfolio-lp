import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Intro from "./Intro";
import Image from "next/image";

export type Project = {
  url: string;
  id: number;
  title: string;
};

type Props = {
  slides: any;
};

function Hero({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setShouldShowIntro(false);
    }, 4000);
  }, []);

  const zInd = (index: number) => {
    if (index === currentIndex) {
      return `z-10`;
    } else {
      return `z-0`;
    }
  };

  return (
    <div className="h-screen m-auto relative group">
      {shouldShowIntro && <Intro />}
      {slides.map((slide: any, index: number) => (
        <Image
          key={slide.id}
          alt={slide.title}
          src={slide.image}
          className={`w-full h-full bg-center object-cover absolute top-0 ${zInd(
            index
          )}`}
          height={0}
          width={0}
          loading="eager"
          priority
          unoptimized
        />
      ))}
      <div className="arrow left-5 z-20">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="arrow right-5 z-20">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default Hero;

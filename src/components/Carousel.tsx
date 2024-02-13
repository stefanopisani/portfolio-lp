import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Intro from "./Intro";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

export type Project = {
  url: string;
  id: number;
  title: string;
};

type Props = {
  slides: any;
};

function Carousel({ slides }: Props) {
  const [shouldShowIntro, setShouldShowIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShouldShowIntro(false);
    }, 3000);
  }, []);

  return (
    <div className="h-screen m-auto relative group">
      {shouldShowIntro && <Intro />}
      {slides.length > 0 && (
        <ReactCarousel
          animationHandler="fade"
          autoPlay
          infiniteLoop
          interval={3000}
          transitionTime={500}
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          stopOnHover={false}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <BsChevronCompactLeft className="w-9 h-9 text-white" />
              </div>
              //   <BsChevronCompactLeft size={30} />
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <BsChevronCompactRight className="w-9 h-9 text-white" />
              </div>
              //   <BsChevronCompactRight size={30} />
            );
          }}
        >
          {slides.map((slide: any, index: number) => (
            <div key={slide.id}>
              <img src={slide.image} alt={slide.title} className="h-screen" />
            </div>
          ))}
        </ReactCarousel>
      )}
    </div>
  );
}

export default Carousel;

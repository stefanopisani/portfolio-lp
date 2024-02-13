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
          autoFocus
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
              <div className="arrow left-5 z-20" onClick={clickHandler}>
                <BsChevronCompactLeft size={30} />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div className="arrow right-5 z-20" onClick={clickHandler}>
                <BsChevronCompactRight size={30} />
              </div>
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

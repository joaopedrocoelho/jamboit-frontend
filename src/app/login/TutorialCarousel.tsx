import Carousel from "@/components/carousel/Carousel";
import React, { useState } from "react";
import { TutorialCarouselContext } from "./TutorialCarouselContext";

const TutorialCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = Array.from({ length: 8 }, (_, index) => ({
    data: `Slide ${index + 1}`,
  }));

  return (
    <TutorialCarouselContext.Provider
      value={{
        slides: slides,
        activeSlide: activeSlide,
        setActiveSlide: (slide: number) => {
          activeSlide != slide && setActiveSlide(slide);
        },
      }}
    >
      <Carousel context={TutorialCarouselContext} />
    </TutorialCarouselContext.Provider>
  );
};

export default TutorialCarousel;

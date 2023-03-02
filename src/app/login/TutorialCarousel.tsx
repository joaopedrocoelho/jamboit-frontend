import Carousel from "@/components/carousel/Carousel";
import React, { useState, useReducer } from "react";
import { TutorialCarouselContext } from "./TutorialCarouselContext";
import { carouselReducer } from "../../components/carousel/CarouselReducer";

const TutorialCarousel = () => {
  const slides = Array.from({ length: 6 }, (_, index) => ({
    data: `Slide ${index + 1}`,
  }));
  const [state, dispatch] = useReducer(carouselReducer, {
    previous: 0,
    active: Math.floor(slides.length / 2),
    trend: "none"
  });

  return (
    <TutorialCarouselContext.Provider
      value={{
        slides: slides,
        state: state,
        dispatch: dispatch,
      }}
    >
      <Carousel context={TutorialCarouselContext} />
    </TutorialCarouselContext.Provider>
  );
};

export default TutorialCarousel;

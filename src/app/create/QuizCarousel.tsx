import Carousel from "@/components/carousel/Carousel";
import React, { useState, useReducer } from "react";
import { QuizCarouselContext } from "./QuizCarouselContext";
import { carouselReducer } from "../../components/carousel/CarouselReducer";

const QuizCarousel = () => {
  const slides = Array.from({ length: 6 }, (_, index) => ({
    data: `Slide ${index + 1}`,
  }));
  const [state, dispatch] = useReducer(carouselReducer, {
    previous: 0,
    active: Math.floor(slides.length / 2),
    trend: "none"
  });

  return (
    <QuizCarouselContext.Provider
      value={{
        slides: slides,
        state: state,
        dispatch: dispatch,
      }}
    >
      <Carousel context={QuizCarouselContext} />
    </QuizCarouselContext.Provider>
  );
};

export default QuizCarousel;

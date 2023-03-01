import Carousel from "@/components/carousel/Carousel";
import React, { useState, useReducer } from "react";
import { TutorialCarouselContext } from "./TutorialCarouselContext";
import { carouselReducer, initialState } from "../../components/carousel/CarouselReducer";

const TutorialCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = Array.from({ length: 6 }, (_, index) => ({
    data: `Slide ${index + 1}`,
  }));
  const [state, dispatch] = useReducer(carouselReducer, initialState);

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

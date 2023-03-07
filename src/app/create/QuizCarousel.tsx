import Carousel from "@/components/carousel/Carousel";
import React, { useState, useReducer, useEffect } from "react";
import { QuizCarouselContext } from "./QuizCarouselContext";
import { carouselReducer } from "../../components/carousel/CarouselReducer";
import { useQuizzesQuery } from "@/store/api/userQuiz";
import QuizCarouselSlide from "./QuizCarouselSlide";

const QuizCarousel = () => {
  const { data, error, isLoading } = useQuizzesQuery();



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
        slides: data ?? [],
        state: state,
        dispatch: dispatch,
      }}
    >
      <Carousel context={QuizCarouselContext} SlideComponent={QuizCarouselSlide}/>
    </QuizCarouselContext.Provider>
  );
};

export default QuizCarousel;

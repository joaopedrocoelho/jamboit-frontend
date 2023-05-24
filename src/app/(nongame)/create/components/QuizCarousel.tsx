import Carousel from "@/components/carousel/Carousel";
import React, {
  useState,
  useReducer,
  useEffect,
  FC,
  PropsWithChildren,
} from "react";
import { QuizCarouselContext } from "./QuizCarouselContext";
import { carouselReducer } from "../../../../components/carousel/CarouselReducer";
import { useQuizzesQuery } from "@/store/api/userQuiz";
import QuizCarouselSlide from "./QuizCarouselSlide";
import Spinner from "public/spinner.svg";

const QuizCarousel = () => {
  const { data, error, isLoading } = useQuizzesQuery();
  const [slides, setSlides] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (data) {
      const newSlides = data.map((quizInfo) => {
        return (
          <div>
            <h1>{quizInfo?.info?.title}</h1>
          </div>
        );
      });
      setSlides(() => newSlides);
    }
  }, [data]);

  const [state, dispatch] = useReducer(carouselReducer, {
    previous: 0,
    active: 0,
    trend: "none",
  });

  if (true) {
    return (
      <div className=" w-3/5">
        {/*  <p>Loading...</p> */}
        <Spinner currentColor={"#FF0000"} />
      </div>
    );
  }

  return (
    <QuizCarouselContext.Provider
      value={{
        slides: slides ?? [],
        state: state,
        dispatch: dispatch,
      }}
    >
      <Carousel
        context={QuizCarouselContext}
        SlideComponent={QuizCarouselSlide}
      />
    </QuizCarouselContext.Provider>
  );
};

export default QuizCarousel;

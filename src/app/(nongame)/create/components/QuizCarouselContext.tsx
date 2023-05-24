//create a Context for the tutorial carousel
import { CarouselContextValues } from "@/components/carousel/Carousel";
import { createContext } from "react";

export const QuizCarouselContext = createContext<CarouselContextValues>({
    slides: [],
    state: {trend: "none", active: 0, previous: 0},
    dispatch: () => { }
});
//create a Context for the tutorial carousel
import { CarouselContextValues } from "@/components/carousel/Carousel";
import { createContext } from "react";

export const TutorialCarouselContext = createContext<CarouselContextValues>({
    slides: [],
    activeSlide: 0,
    setActiveSlide: (slide: number) => {},
    });
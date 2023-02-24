import React, { useContext, Context, FC, useRef, useEffect, useState } from "react";
import CarouselNav from "./CarouselNav";
import CarouselPagination from "./CarouselPagination";
import CarouselSlide from "./CarouselSlide";

export interface CarouselContextValues {
  slides: any[];
  activeSlide: number;
  setActiveSlide: (slide: number) => void;
}
interface Props {
  context: Context<CarouselContextValues>;
}

const Carousel: FC<Props> = ({ context }) => {
  const { slides, activeSlide } = useContext(context);
  const [translate, setTranslate] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const slideWidth = containerRef.current.querySelector(".slide")?.clientWidth || 0;
      const gap = parseInt(getComputedStyle(containerRef.current).getPropertyValue("gap")) || 0;
      const centerIndex = Math.floor(slides.length / 2);
      const translateX = (slideWidth + gap) * (activeSlide - centerIndex);
      //log all variables one by one
        console.log("containerWidth", containerWidth);
        console.log("slideWidth", slideWidth);
        console.log("gap", gap);
        console.log("centerIndex", centerIndex);
        console.log("translateX", translateX);
        setTranslate(translateX);
    }
  }, [activeSlide, slides]);

  return (
    <div className="flex flex-col items-center w-3/5">
      <div className="w-full overflow-hidden">
        <div className="flex gap-10 w-screen mb-8" ref={containerRef}
        style={{
            'transform': `translateX(${translate}px)`
        }}>
          {slides.map((slide, index) => (
            <CarouselSlide content={slide.data} isActive={activeSlide === index} key={`slide-${index}`}  />
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <CarouselPagination context={context} />
        <CarouselNav  context={context}/>
      </div>
    </div>
  );
};

export default Carousel;

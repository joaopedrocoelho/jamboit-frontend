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
  const slideRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (containerRef.current && slideRefs.current.length > 0) {
      console.log('scroll')
      containerRef.current.scrollTo(-200,0);
      //console all variables one by one 
  
    }
  }, [activeSlide, slides]);

  return (
    <div className="flex flex-col items-center w-3/5">
      <div className="w-full overflow-x-scroll overflow-y-hidden carousel-container">
        <div className="flex gap-10 w-screen mb-8" ref={containerRef}>
          {slides.map((slide, index) => (
            <CarouselSlide 
            ref={(el) => {if(el) {
              return slideRefs.current[index] = el
            } }}
            content={slide.data} 
            isActive={activeSlide === index} 
            key={`slide-${index}`}  />
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

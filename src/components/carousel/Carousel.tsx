import React, {
  useContext,
  Context,
  FC,
  useRef,
  useEffect,
  useState,
  useReducer,
  Reducer
} from "react";
import CarouselNav from "./CarouselNav";
import CarouselPagination from "./CarouselPagination";
import CarouselSlide from "./CarouselSlide";

import { CarouselReducer, initialState, CarouselState, CarouselAction } from "./CarouselReducer";

export interface CarouselContextValues {
  slides: any[];
  state: CarouselState;
  dispatch: React.Dispatch<CarouselAction>;
}
interface Props {
  context: Context<CarouselContextValues>;
}

const Carousel: FC<Props> = ({ context }) => {
  const { slides, state, dispatch } = useContext(context);
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);

  const initTranslate = () => {
    if (containerRef.current && 
      wrapperRef.current &&
      slideRefs.current.length > 0) {
      const slideWidth = slideRefs.current[0].offsetWidth;
      const wrapperWidth = wrapperRef.current?.offsetWidth;
      
      //translate so slide is centered  in container
      const translateCenter =
      (wrapperWidth /2 ) - ((slideWidth / 2));
      setTranslate(translateCenter);
    }
  };

 useEffect(() => {
    if(state.active === 0) {
      initTranslate();
    } else if (containerRef.current) {
      const gap = 
      parseFloat(getComputedStyle(containerRef.current).getPropertyValue('gap').replace('px', ''));
      if(state.trend === 'increasing') {
        setTranslate((prev) => prev - (slideRefs.current[state.active - 1].offsetWidth + gap))    
      } else {
        setTranslate((prev) => prev + (slideRefs.current[state.active + 1].offsetWidth + gap))
      }
    }
   
  }, [state.active, slides]); 



  return (
    <div className="flex flex-col items-center w-3/5">
      <div 
      ref={wrapperRef}
      className="w-full overflow-hidden carousel-container">
        <div ref={containerRef} className="flex gap-10 w-screen mb-8 transition-transform"
       style={{transform: `translateX(${translate}px)`}}
        >
          {slides.map((slide, index) => (
            <CarouselSlide
              ref={(el) => {
                if (el) {
                  return (slideRefs.current[index] = el);
                }
              }}
              content={slide.data}
              isActive={state.active === index}
              key={`slide-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <CarouselPagination context={context} />
        <CarouselNav context={context} />
      </div>
    </div>
  );
};

export default Carousel;

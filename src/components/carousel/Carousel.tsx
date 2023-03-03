import React, {
  useContext,
  Context,
  FC,
  useRef,
  useEffect,
  useState,
} from "react";
import CarouselNav from "./CarouselNav";
import CarouselPagination from "./CarouselPagination";
import CarouselSlide from "./CarouselSlide";

import { CarouselState, CarouselAction, CarouselActionKind } from "./CarouselReducer";
import { useSwipeable } from "react-swipeable";

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
  const [hasInit, sethasInit] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);

const initTranslate = () => {
    if (containerRef.current && 
      wrapperRef.current &&
      slideRefs.current.length > 0) {
      const slideWidth = slideRefs.current[0].offsetWidth;
      const wrapperWidth = wrapperRef.current?.offsetWidth;
      const gap = 
      parseFloat(getComputedStyle(containerRef.current).getPropertyValue('gap').replace('px', ''));
      //translate so slide is centered  in container
      const translateCenter =
      (wrapperWidth /2 ) - ((slideWidth / 2));
      setTranslate(translateCenter - (slideWidth + gap) * state.active);
      sethasInit(true);
    }
  }; 

 

 useEffect(() => {
     if(!hasInit) initTranslate();
    
     if (containerRef.current) {
      const gap = 
      parseFloat(getComputedStyle(containerRef.current).getPropertyValue('gap').replace('px', ''));
    switch (state.trend) {
      
      case 'none':
        break;
      case 'increasing':
        setTranslate((prev) => prev - 
        ((slideRefs.current[state.active - 1].offsetWidth + gap) 
        * (state.active - state.previous)))
        break;
      case 'decreasing':
        setTranslate((prev) => prev + 
        (slideRefs.current[state.active + 1].offsetWidth + gap)
        * (state.previous - state.active))
        break;

    }
    }
   
  }, [state.active]); 

  const handlers = useSwipeable({
    onSwipedLeft(e) {
      const slideWidth = slideRefs.current[0].offsetWidth
      const t = slideWidth / 2;
      const isLastSlide = state.active === slides.length - 1;
      if (!isLastSlide && -e.deltaX >= t) {
        dispatch({
          type: CarouselActionKind.NEXT,
          payload: state.active + 1
        });
      } 
    },
    onSwipedRight(e) {
      const slideWidth = slideRefs.current[0].offsetWidth
      const t = slideWidth / 2;
      const isLastSlide = state.active === 0;
  
      if (!isLastSlide && e.deltaX >= t) {
        dispatch({
          type: CarouselActionKind.PREV,
          payload: state.active - 1
        });
      }
    },
    trackMouse: true,
    trackTouch: true
  })

  const refPassthrough = (el:HTMLDivElement) => {
    // call useSwipeable ref prop with el
    handlers.ref(el);

    // set myRef el so you can access it yourself
    containerRef.current = el;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div 
      ref={wrapperRef}
      className="w-full overflow-hidden carousel-container">
        <div className="flex gap-10 w-screen mb-8 transition-transform"
       style={{transform: `translateX(${translate}px)`}}
        {...handlers} ref={refPassthrough}
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
              onClick={() => dispatch({ type: CarouselActionKind.JUMP, payload: index })}
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

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
  const [previousSlide, setPreviousSlide] = useState(0);
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
    if(activeSlide === 0) {
      initTranslate();
    } else if (containerRef.current) {
      const gap = 
      parseFloat(getComputedStyle(containerRef.current).getPropertyValue('gap').replace('px', ''));
      
      setTranslate((prev) => prev + (slideRefs.current[activeSlide - 1].offsetWidth + gap))    
    }
   
  }, [activeSlide, slides]);



  return (
    <div className="flex flex-col items-center w-3/5">
      <div 
      ref={wrapperRef}
      className="w-full overflow-hidden carousel-container">
        <div ref={containerRef} className="flex gap-10 w-screen mb-8 transition-transform"
       
        >
          {slides.map((slide, index) => (
            <CarouselSlide
              ref={(el) => {
                if (el) {
                  return (slideRefs.current[index] = el);
                }
              }}
              content={slide.data}
              isActive={activeSlide === index}
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

import React from "react";
import CarouselNav from "./CarouselNav";
import CarouselPagination from "./CarouselPagination";
import CarouselSlide from "./CarouselSlide";

const Carousel = () => {
  const slides = Array.from({ length: 8 }, (_, index) => (
    <CarouselSlide key={index} />
  ));
  return (
    <div className="flex flex-col items-center w-3/5">
      <div className="w-full overflow-hidden">
        <div className="flex gap-10 w-screen mb-8">{slides}</div>
      </div>
      <div className="flex justify-between w-full items-center">
        <CarouselPagination numberOfSlides={5} activeSlide={4} />
        <CarouselNav />
      </div>
    </div>
  );
};

export default Carousel;

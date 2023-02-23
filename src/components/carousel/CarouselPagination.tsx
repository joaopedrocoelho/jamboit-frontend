import React, { FC } from 'react'

interface Props {
    numberOfSlides: number;
    activeSlide: number;
}

const CarouselPagination:FC<Props> = ({numberOfSlides, activeSlide}) => {
    const paginationItems = Array.from({ length: numberOfSlides }, (_, index) => (
        <div
          key={index}
          className={`rounded-full h-6 transition-width ${
            index + 1 === activeSlide ? 'bg-primary-600 w-24' : 'bg-zinc-300 w-6'
          }`}
        />
      ));
    
      return <div className='flex justify-center gap-4'>{paginationItems}</div>;
    };

export default CarouselPagination;

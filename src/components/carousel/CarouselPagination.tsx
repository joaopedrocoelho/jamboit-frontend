import React, { FC, useContext, Context } from 'react'
import { CarouselContextValues } from './Carousel';

interface Props {
    context:Context<CarouselContextValues>
}

const CarouselPagination:FC<Props> = ({context}) => {
    const { slides, activeSlide, setActiveSlide} = useContext(context);
   



    const paginationItems = Array.from({ length: slides.length }, (_, index) => (
        <button
          type='button'
          onClick={() => setActiveSlide(index)}
          key={index}
          className={`rounded-full h-6 transition-width ${
            index === activeSlide ? 'bg-primary-600 w-24' : 'bg-zinc-300 w-6'
          }`}
        />
      ));
    
      return <div className='flex justify-center gap-4'>{paginationItems}</div>;
    };

export default CarouselPagination;

import React, { FC, forwardRef, MutableRefObject  } from 'react';
import { CarouselContextValues } from './Carousel';

interface Props {
    isActive: boolean;
    content:any;
    onClick: () => void;
}

const CarouselSlide = forwardRef<HTMLDivElement,Props>(({isActive, content, onClick}, ref) => {
    

  return (
    <div 
    onClick={onClick}
    className=
    {`slide cursor-pointer ${isActive ? 'bg-purple-500' : 'bg-primary-400'} rounded-2xl h-52 w-40 flex place-items-center
    select-none`}
    ref={ref}
    ><p className='m-auto'>{content}</p></div>
  )
})

export default CarouselSlide
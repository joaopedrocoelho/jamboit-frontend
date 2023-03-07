import React, { FC, forwardRef, MutableRefObject  } from 'react';
import { CarouselContextValues } from './Carousel';

interface Props {
    isActive: boolean;
    children: React.ReactNode;
    onClick: () => void;
}

const CarouselSlide = forwardRef<HTMLDivElement,Props>(({isActive, children, onClick}, ref) => {
    

  return (
    <span
    onClick={onClick}
    className=
    {`slide cursor-pointer ${isActive ? 'bg-purple-500' : 'bg-primary-400'} rounded-2xl h-52 w-40 flex place-items-center
    select-none`}
    ref={ref}
    >{children}</span>
  )
})

export default CarouselSlide
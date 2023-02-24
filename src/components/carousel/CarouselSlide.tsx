import React, { FC, Context, useContext } from 'react';
import { CarouselContextValues } from './Carousel';

interface Props {
    isActive: boolean;
    content:any;
}

const CarouselSlide:FC<Props> = ({isActive, content}) => {
    

  return (
    <div className=
    {`slide ${isActive ? 'bg-purple-500' : 'bg-primary-400'} rounded-2xl h-52 w-40 flex place-items-center`}
    ><p className='m-auto'>{content}</p></div>
  )
}

export default CarouselSlide
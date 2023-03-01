import React, { FC, useContext, Context } from 'react'
import { CarouselContextValues } from './Carousel';
import { CarouselActionKind } from './CarouselReducer';

interface Props {
    context:Context<CarouselContextValues>
}

const CarouselPagination:FC<Props> = ({context}) => {
    const { slides, state, dispatch} = useContext(context);
   



    const paginationItems = Array.from({ length: slides.length }, (_, index) => (
        <button
          type='button'
          onClick={() => dispatch({ type: CarouselActionKind.JUMP, payload: index })}
          key={index}
          className={`cursor-pointer rounded-full h-6 transition-width ${
            index === state.active ? 'bg-primary-600 w-24' : 'bg-zinc-300 w-6'
          }`}
        />
      ));
    
      return <div className='flex justify-center gap-4'>{paginationItems}</div>;
    };

export default CarouselPagination;

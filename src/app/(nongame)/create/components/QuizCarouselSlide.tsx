import React, {FC, PropsWithChildren, forwardRef} from 'react'
import { SlideProps } from '@/components/carousel/Carousel'



const QuizCarouselSlide = forwardRef<HTMLDivElement,PropsWithChildren<SlideProps>>(({isActive, children, onClick}, ref) => {
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

export default QuizCarouselSlide
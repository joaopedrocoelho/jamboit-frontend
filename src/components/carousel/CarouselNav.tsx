import React from 'react'

const CarouselNav = () => {
  return (
    <div className='flex gap-6'>
        <button className='rounded-full w-20 h-20 bg-primary-400'>&#9664;</button>
        <button className='rounded-full w-20 h-20 bg-primary-400'>&#9654;</button>
    </div>
  )
}

export default CarouselNav;
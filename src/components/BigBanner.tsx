import {FC} from 'react';
import Image from 'next/image';

interface Props {
    bgColor: string,
    children: React.ReactNode,
    img: string,
    alt: string
}

const BigBanner:FC<Props> = ({bgColor, children, img, alt}) => {
  return (
    <div className={`${bgColor} w-4/5 h-80 rounded-2xl flex justify-between p-8`}>
        <div className='w-2/5 relative mr-8'>
            <Image
            src={img} 
            alt={alt}
            fill />
        </div>
        <div className="flex flex-col justify-center w-full">
            {children}
        </div>
    </div>
  )
}

export default BigBanner
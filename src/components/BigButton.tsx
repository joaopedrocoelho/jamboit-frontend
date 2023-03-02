import React, {FC, useState, useEffect} from 'react';
import Spinner from 'public/spinner.svg';

interface Props {
  onClick: () => void,
  children: React.ReactNode,
  isLoading: boolean
}

const BigButton:FC<Props> = ({onClick, children, isLoading}) => {

  return (<button type="button" onClick={onClick}
   className={`button-transitions
   ${isLoading ? 'w-20 rounded-full bg-primary-900' : 'w-3/5  rounded-2xl bg-primary-700'}  
   h-20 text-2xl my-8 font-medium tracking-wider text-white flex justify-center items-center`}>
    {isLoading ? <Spinner className={`w-20 h-20`}/> : children}

   </button>
  )
}

export default BigButton
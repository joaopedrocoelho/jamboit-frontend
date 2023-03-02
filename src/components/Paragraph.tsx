import {FC} from 'react';

interface Props {
    text: string
}

const Paragraph:FC<Props> = ({text}) => {
  return (
    <p className="text-xl font-normal text-primary-1000">{text}</p>
  )
}

export default Paragraph
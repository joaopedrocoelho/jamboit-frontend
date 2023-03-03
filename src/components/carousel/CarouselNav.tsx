import { FC, useContext, Context } from "react";
import { CarouselContextValues } from "./Carousel";
import { CarouselActionKind } from "./CarouselReducer";
import Caret from "public/caret.svg"

interface Props {
  context: Context<CarouselContextValues>;
}

const CarouselNav: FC<Props> = ({ context }) => {
  const { slides, state, dispatch } = useContext(context);


  const isLeftEnabled = state.active !== 0;
  const isRightEnabled = state.active !== slides.length - 1;

  return (
    <div className="flex gap-6">
      <button
      onClick={() =>  {
       isLeftEnabled && dispatch({type: CarouselActionKind.PREV , payload: state.active - 1});

      }}
        className={`rounded-full w-20 h-20 ${
          isLeftEnabled ? "bg-primary-600" : "bg-zinc-300"
        }`}
      >
        <Caret className="w-10 h-10 fill-primary-900 rotate-180 m-auto -translate-x-1"/>
      </button>
      <button
      onClick={() => {
        isRightEnabled && dispatch({type: CarouselActionKind.NEXT, payload: 0});
      }}
        className={`rounded-full w-20 h-20 ${
          isRightEnabled
            ? "bg-primary-600"
            : "bg-zinc-300"
        }`}
      >
        <Caret className="w-10 h-10 fill-primary-900 m-auto translate-x-1"/>
      </button>
    </div>
  );
};

export default CarouselNav;

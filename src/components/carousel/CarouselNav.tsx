import { FC, useContext, Context } from "react";
import { CarouselContextValues } from "./Carousel";
import { CarouselActionKind } from "./CarouselReducer";

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
        &#9664;
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
        &#9654;
      </button>
    </div>
  );
};

export default CarouselNav;

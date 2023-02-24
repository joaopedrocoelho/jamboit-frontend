import { FC, useContext, Context } from "react";
import { CarouselContextValues } from "./Carousel";

interface Props {
  context: Context<CarouselContextValues>;
}

const CarouselNav: FC<Props> = ({ context }) => {
  const { slides, activeSlide, setActiveSlide } = useContext(context);

  const isLeftEnabled = activeSlide !== 0;
  const isRightEnabled = activeSlide !== slides.length - 1;

  return (
    <div className="flex gap-6">
      <button
      onClick={() =>  {
       isLeftEnabled && setActiveSlide(activeSlide - 1);

      }}
        className={`rounded-full w-20 h-20 ${
          isLeftEnabled ? "bg-primary-600 w-24" : "bg-zinc-300"
        }`}
      >
        &#9664;
      </button>
      <button
      onClick={() => {
        isRightEnabled && setActiveSlide(activeSlide + 1);
      }}
        className={`rounded-full w-20 h-20 ${
          isRightEnabled
            ? "bg-primary-600 w-24"
            : "bg-zinc-300"
        }`}
      >
        &#9654;
      </button>
    </div>
  );
};

export default CarouselNav;

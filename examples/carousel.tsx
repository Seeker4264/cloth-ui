import React from "react";
import { Carousel } from "#main";

interface CarouselExampleProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const CarouselExample: React.FC<CarouselExampleProps> = ({
  autoSlide,
  autoSlideInterval,
}) => {
  return (
    <div className="mx-24">
      <Carousel autoSlide={autoSlide} autoSlideInterval={autoSlideInterval}>
        <div className="cl:h-96 cl:bg-[#3380EC] cl:flex cl:items-center cl:justify-center cl:text-white cl:text-2xl cl:font-medium">
          Slide 1
        </div>
        <div className="cl:h-96 cl:bg-[#3AB37C] cl:flex cl:items-center cl:justify-center cl:text-white cl:text-2xl cl:font-medium">
          Slide 2
        </div>
        <div className="cl:h-96 cl:bg-[#EC3333] cl:flex cl:items-center cl:justify-center cl:text-white cl:text-2xl cl:font-medium">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselExample;

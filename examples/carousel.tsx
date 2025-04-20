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
        <div className="h-96 bg-[#3380EC] flex items-center justify-center text-white text-2xl font-medium">
          Slide 1
        </div>
        <div className="h-96 bg-[#3AB37C] flex items-center justify-center text-white text-2xl font-medium">
          Slide 2
        </div>
        <div className="h-96 bg-[#EC3333] flex items-center justify-center text-white text-2xl font-medium">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselExample;

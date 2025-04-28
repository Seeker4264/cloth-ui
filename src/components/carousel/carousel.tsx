import React, { Children, ReactNode, useEffect, useRef, useState } from "react";

export interface CarouselProps {
  children: ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoSlide = false,
  autoSlideInterval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = Children.toArray(children);
  const totalSlides = slides.length;
  const lButtonRef = useRef<HTMLButtonElement>(null);
  const rButtonRef = useRef<HTMLButtonElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const nextSlideEffect = () => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlideEffect, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, currentSlide, totalSlides]);

  const createRipple = (
    buttonReference: React.RefObject<HTMLButtonElement | null>,
    onClick: () => void
  ) => {
    if (onClick) {
      onClick();
    }

    const button = buttonReference.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.backgroundColor = "#00000088";
    circle.style.left = `0px`;
    circle.style.top = `0px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <div className="cl:relative cl:overflow-hidden cl:rounded-lg">
      <div
        className="cl:flex cl:transition-transform cl:duration-700 cl:ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="cl:w-full cl:flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      <button
        ref={lButtonRef}
        onClick={() => createRipple(lButtonRef, prevSlide)}
        className="cl:absolute cl:overflow-hidden cl:left-2 cl:top-1/2 cl:-translate-y-1/2 cl:bg-black/30 cl:text-white cl:p-2 cl:rounded-full cl:cursor-pointer
        cl:hover:bg-black/50 cl:focus:outline-none
        cl:active:bg-black/70
        cl:duration-150"
        aria-label="Previous slide"
      >
        <svg
          className="cl:relative cl:z-20 cl:size-6 cl:text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        ref={rButtonRef}
        onClick={() => createRipple(rButtonRef, nextSlide)}
        className="cl:absolute cl:overflow-hidden cl:right-2 cl:top-1/2 cl:-translate-y-1/2 cl:bg-black/30 cl:text-white cl:p-2 cl:rounded-full cl:cursor-pointer
        cl:hover:bg-black/50 cl:focus:outline-none
        cl:active:bg-black/70
        cl:duration-150"
        aria-label="Next slide"
      >
        <svg
          className="cl:relative cl:z-20 cl:size-6 cl:text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="cl:absolute cl:bottom-4 cl:left-1/2 cl:-translate-x-1/2 cl:flex cl:space-x-3">
        {slides.map((_: unknown, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`cl:size-3 cl:rounded-full cl:cursor-pointer 
            ${currentSlide === index ? "cl:bg-white cl:scale-125" : "cl:bg-white/50"}
            cl:duration-150`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

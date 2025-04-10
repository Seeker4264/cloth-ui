import { useRef, MouseEventHandler, useEffect } from "react";
import "./../../styles.css";

interface ButtonProps {
  text: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonMainProps {
  variant: "primary" | "secondary";
  text: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ButtonPrimary = ({ text, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className="px-5 py-2 text-lg rounded-lg cursor-pointer bg-white border-2 border-[#2C6DE0] text-[#2C6DE0]
      hover:border-[#498BFF] hover:text-[#498BFF] hover:bg-[#E7EEFF]
      active:border-[#144DB1] active:text-[#144DB1] active:bg-[#D5E4FF]
      duration-150"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const ButtonSecondary = ({ text, disabled, onClick }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const rippleEvent = (e: MouseEvent) => {
      const ripple = document.createElement("div");
      ripple.classList = "ripple";
      ripple.style.left = e.offsetX + "px";
      ripple.style.top = e.offsetY + "px";
      if (currentElement) {
        currentElement.appendChild(ripple);
      }
      ripple.addEventListener("animationend", () => ripple.remove());
    };

    const currentElement = buttonRef.current;

    if (currentElement)
      currentElement.addEventListener("mousedown", rippleEvent);

    if (currentElement)
      return () => {
        currentElement.removeEventListener("click", rippleEvent);
      };
  }, []);

  return (
    <button
      className="relative overflow-hidden px-[1.375rem] py-2.5 text-lg rounded-lg cursor-pointer bg-[#447FE4] text-white
      hover:bg-[#498BFF]
      duration-150"
      ref={buttonRef}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="relative z-20">{text}</span>
    </button>
  );
};

export const Button = ({
  variant = "primary",
  text,
  disabled,
  onClick,
}: ButtonMainProps) => {
  if (variant == "primary")
    return <ButtonPrimary text={text} disabled={disabled} onClick={onClick} />;

  if (variant == "secondary")
    return (
      <ButtonSecondary text={text} disabled={disabled} onClick={onClick} />
    );
};

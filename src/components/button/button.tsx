import { useRef, MouseEventHandler, MouseEvent } from "react";
import "./../../styles.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

const ButtonPrimary: React.FC<ButtonProps> = ({
  text,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <button
      className="px-5 py-2 text-lg rounded-lg cursor-pointer bg-white border-2 border-[#2C6DE0] text-[#2C6DE0]
      hover:border-[#498BFF] hover:text-[#498BFF] hover:bg-[#E7EEFF]
      active:border-[#144DB1] active:text-[#144DB1] active:bg-[#D5E4FF]
      duration-150"
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

const ButtonSecondary: React.FC<ButtonProps> = ({
  text,
  disabled,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }

    const button = buttonRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <button
      className="relative overflow-hidden px-[1.375rem] py-2.5 text-lg rounded-lg cursor-pointer bg-[#447FE4] text-white
      hover:bg-[#498BFF]
      active:bg-[#2567DA]
      duration-150"
      ref={buttonRef}
      disabled={disabled}
      onClick={createRipple}
      {...props}
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

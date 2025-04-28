import React, { useRef, MouseEventHandler, MouseEvent, ReactNode } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "secondaryAlt";
  text?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  buttonType?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text = "",
  icon,
  iconPosition = "left",
  disabled = false,
  buttonType = "button",
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const buttonClass = {
    primary: `cl:relative cl:overflow-hidden cl:px-[1.25rem] cl:py-1.5 cl:text-lg cl:font-medium cl:rounded-lg cl:cursor-pointer
      cl:bg-white cl:dark:bg-transparent cl:border-2 cl:border-[#2C6DE0] cl:text-[#2C6DE0] cl:dark:border-[#68A0FF] cl:dark:text-[#68A0FF]
      cl:hover:border-[#498BFF] cl:hover:text-[#498BFF] cl:dark:hover:border-[#86B3FF] cl:dark:hover:text-[#86B3FF] cl:hover:bg-[#E7EEFF] cl:dark:hover:bg-[#1756C444]
      cl:active:border-[#144DB1] cl:active:text-[#144DB1] cl:active:bg-[#D5E4FF] cl:dark:active:border-[#1F5ECB] cl:dark:active:text-[#1F5ECB]
      cl:disabled:border-[#707070] cl:disabled:bg-[#F0F0F0] cl:disabled:text-[#707070] cl:dark:disabled:bg-transparent
      cl:duration-150`,
    secondary: `cl:relative cl:overflow-hidden cl:px-[1.375rem] cl:py-2 cl:text-lg cl:font-medium cl:rounded-lg cl:cursor-pointer
      cl:bg-[#447FE4] cl:text-white
      cl:hover:bg-[#498BFF]
      cl:active:bg-[#2567DA]
      cl:disabled:bg-[#707070] cl:disabled:text-[#CCCCCC]
      cl:duration-150`,
    secondaryAlt: `cl:relative cl:overflow-hidden cl:px-[1.375rem] cl:py-2 cl:text-lg cl:font-medium cl:rounded-full cl:cursor-pointer
      cl:bg-[#AECBFF] cl:text-[#003EAA]
      cl:hover:bg-[#9EBFFB]
      cl:active:bg-[#94B6F5]
      cl:disabled:bg-[#707070] cl:disabled:text-[#CCCCCC]
      cl:duration-150`,
  };

  const iconClass = {
    primary: `cl:text-[#2C6DE0] cl:group-hover:text-[#498BFF] cl:group-active:text-[#144DB1] cl:group-disabled:text-[#707070]
    cl:dark:text-[#68A0FF] cl:dark:group-hover:text-[#86B3FF] cl:dark:group-active:text-[#1F5ECB]`,
    secondary: `cl:text-white cl:group-disabled:text-[#CCCCCC]`,
    secondaryAlt: `cl:text-[#003EAA] cl:group-disabled:text-[#CCCCCC]`,
  };

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
    const rippleColor = {
      primary: "#498BFF66",
      secondary: "#1F60CF",
      secondaryAlt: "#7DA0E0",
    };
    circle.style.backgroundColor = rippleColor[variant];
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
      type={buttonType}
      className={`cl:group cl:flex cl:flex-row cl:gap-2 cl:justify-center cl:items-center ${buttonClass[variant]}`}
      ref={buttonRef}
      disabled={disabled}
      onClick={createRipple}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span
          className={`cl:relative cl:z-20 ${iconClass[variant]} cl:duration-150`}
        >
          {icon}
        </span>
      )}
      {text && <span className="cl:relative cl:z-20">{text}</span>}
      {icon && iconPosition === "right" && (
        <span
          className={`cl:relative cl:z-20 ${iconClass[variant]} cl:duration-150`}
        >
          {icon}
        </span>
      )}
    </button>
  );
};

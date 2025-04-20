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
    primary: `relative overflow-hidden px-[1.25rem] py-1.5 text-lg font-medium rounded-lg cursor-pointer bg-white border-2 border-[#2C6DE0] text-[#2C6DE0]
      hover:border-[#498BFF] hover:text-[#498BFF] hover:bg-[#E7EEFF]
      active:border-[#144DB1] active:text-[#144DB1] active:bg-[#D5E4FF]
      disabled:border-[#707070] disabled:bg-[#F0F0F0] disabled:text-[#707070]
      duration-150`,
    secondary: `relative overflow-hidden px-[1.375rem] py-2 text-lg font-medium rounded-lg cursor-pointer bg-[#447FE4] text-white
      hover:bg-[#498BFF]
      active:bg-[#2567DA]
      disabled:bg-[#707070] disabled:text-[#CCCCCC]
      duration-150`,
    secondaryAlt: `relative overflow-hidden px-[1.375rem] py-2 text-lg font-medium rounded-full cursor-pointer bg-[#AECBFF] text-[#003EAA]
      hover:bg-[#9EBFFB]
      active:bg-[#94B6F5]
      disabled:bg-[#707070] disabled:text-[#CCCCCC]
      duration-150`,
  };

  const iconClass = {
    primary: `text-[#2C6DE0] group-hover:text-[#498BFF] group-active:text-[#144DB1] group-disabled:text-[#707070]`,
    secondary: `text-white group-disabled:text-[#CCCCCC]`,
    secondaryAlt: `text-[#003EAA] group-disabled:text-[#CCCCCC]`,
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
      primary: "#CADAFA",
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
      className={`group flex flex-row gap-2 justify-center items-center ${buttonClass[variant]}`}
      ref={buttonRef}
      disabled={disabled}
      onClick={createRipple}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className={`relative z-20 ${iconClass[variant]} duration-150`}>
          {icon}
        </span>
      )}
      {text && <span className="relative z-20">{text}</span>}
      {icon && iconPosition === "right" && (
        <span className={`relative z-20 ${iconClass[variant]} duration-150`}>
          {icon}
        </span>
      )}
    </button>
  );
};

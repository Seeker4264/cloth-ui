import { Button } from "#main";
import React, { MouseEventHandler } from "react";

interface ButtonExampleProps {
  variant: "primary" | "secondary" | "secondaryAlt";
  dark?: boolean;
  text?: string;
  icon?: boolean;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  buttonType?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonExample: React.FC<ButtonExampleProps> = ({
  variant,
  dark = false,
  text,
  icon = false,
  iconPosition,
  disabled,
  buttonType,
  onClick,
}) => {
  const iconExample = icon ? (
    <svg
      className="cl:size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  ) : null;

  return (
    <div className={dark ? "dark" : ""}>
      <Button
        variant={variant}
        text={text}
        icon={iconExample}
        iconPosition={iconPosition}
        disabled={disabled}
        buttonType={buttonType}
        onClick={onClick}
      />
    </div>
  );
};

export default ButtonExample;

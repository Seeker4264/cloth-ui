import { MouseEventHandler } from "react";
import "./../../styles.css";

export interface ButtonProps {
  text: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ disabled, text, onClick }: ButtonProps) => {
  return (
    <button
      className="px-3 py-2 bg-white border-2 border-purple-700 text-purple-700 rounded-lg cursor-pointer hover:bg-purple-50 active:bg-purple-200 duration-150"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

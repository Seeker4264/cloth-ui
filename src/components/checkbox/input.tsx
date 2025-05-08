import React, { ChangeEvent } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  label = "Input",
  disabled = false,
  required = false,
  readOnly = false,
  checked,
  onChange,
  ...props
}) => {
  return (
    <>
      <div className="cl:flex cl:flex-row cl:items-center cl:gap-2">
        <label
          htmlFor={id}
          className="cl:flex cl:items-center cl:cursor-pointer cl:relative cl:p-1"
        >
          <input
            id={id}
            required={required}
            type="checkbox"
            className="cl:peer cl:size-5 cl:cursor-pointer cl:transition-all cl:appearance-none cl:rounded cl:shadow cl:hover:shadow-md cl:border
            cl:border-[#DDDDDD] cl:checked:bg-[#498BFF] cl:checked:border-[#498BFF]
            cl:disabled:bg-[#E0E0E0] cl:disabled:border-[#CCC] cl:disabled:checked:bg-[#498BFF55] cl:disabled:checked:border-[#498BFF88]
            cl:dark:disabled:bg-[#222222] cl:dark:disabled:border-[#777777] cl:dark:disabled:checked:bg-[#498BFF55] cl:dark:disabled:checked:border-[#498BFF88]
            cl:duration-150"
            disabled={disabled}
            checked={checked}
            readOnly={readOnly}
            onChange={onChange}
            {...props}
          />
          <span
            className="cl:absolute cl:text-white cl:opacity-0 cl:peer-checked:opacity-100 cl:top-1/2 cl:left-1/2 cl:transform cl:-translate-x-1/2 cl:-translate-y-1/2 cl:pointer-events-none
            cl:duration-150"
          >
            <svg
              className="cl:size-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </label>
        <p className="cl:text-base cl:font-medium cl:text-[#333] cl:dark:text-white cl:duration-150">
          {label}
        </p>
      </div>
    </>
  );
};

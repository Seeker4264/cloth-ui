import React, { ChangeEvent } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  variant?: "primary" | "secondary";
  type?: "text" | "password" | "number";
  label?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  value: string | number;
  readonly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  variant = "primary",
  type = "text",
  label = "Input",
  disabled = false,
  required = false,
  readOnly = false,
  error,
  value,
  onChange,
  ...props
}) => {
  const inputClasses = {
    primary: {
      input: `cl:peer cl:px-4 cl:py-3 cl:w-full cl:text-lg cl:outline-none cl:border-2 cl:text-[#333] cl:dark:text-white
          ${error ? "cl:border-red-600 cl:dark:border-red-400" : "cl:border-[#999]"} cl:rounded-lg
          cl:bg-inherit cl:autofill-style-remove
          cl:focus:border-[#498BFF]
          cl:disabled:bg-[#DDD] cl:dark:disabled:bg-[#1A1A1A]
          cl:duration-150`,
      label: `cl:absolute cl:left-0 cl:top-4 cl:ml-4! ${error ? "cl:text-red-600 cl:dark:text-red-400" : "cl:text-[#777] cl:dark:text-[#AAA]"}
          cl:capitalize cl:tracking-wide cl:pointer-events-none cl:bg-inherit
          cl:peer-focus:text-sm cl:peer-focus:-translate-y-6 cl:peer-focus:px-1 cl:peer-focus:text-[#498BFF] cl:dark:peer-focus:text-[#68A0FF]
          ${value ? "cl:text-sm cl:-translate-y-6 cl:px-1" : "cl:text-base cl:px-0"}
          cl:peer-disabled:bg-[#DDD] cl:dark:peer-disabled:bg-[#1A1A1A]
          cl:duration-150`,
    },
    secondary: {
      input: `cl:peer cl:px-4 cl:pb-1.5 cl:pt-[22px] cl:w-full cl:text-base cl:outline-none cl:rounded-t-lg cl:border-2 cl:text-[#333] cl:dark:text-white
          cl:border-[#DDD] cl:bg-[#DDD] cl:dark:border-[#555] cl:dark:bg-[#555] cl:autofill-style-remove
          cl:disabled:bg-[#BBB] cl:disabled:border-[#BBB]
          cl:duration-150`,
      label: `cl:absolute cl:left-0 cl:top-4 cl:ml-4! ${error ? "cl:text-red-600 cl:dark:text-red-400" : "cl:text-[#777] cl:dark:text-[#AAA]"} cl:capitalize cl:tracking-wide cl:pointer-events-none
          cl:peer-focus:text-xs cl:peer-focus:-translate-y-2.5 cl:peer-focus:-translate-x-1 cl:peer-focus:px-1 cl:peer-focus:text-[#498BFF] cl:dark:peer-focus:text-[#68A0FF]
          cl:peer-disabled:text-[#555]
          ${value ? "cl:text-xs cl:-translate-y-2.5 cl:-translate-x-1 cl:px-1" : "cl:text-base cl:px-0"}
          cl:duration-150`,
    },
  };

  return (
    <>
      <div className="cl:relative cl:bg-inherit">
        <input
          id={id}
          required={required}
          type={type}
          className={inputClasses[variant].input}
          disabled={disabled}
          value={value}
          readOnly={readOnly}
          onChange={onChange}
          {...props}
        />
        <label htmlFor={id} className={inputClasses[variant].label}>
          {label}
          {required && " *"}
        </label>
        {variant === "secondary" && (
          <div
            className={`cl:absolute cl:w-full cl:h-[2px] ${error ? "cl:bg-red-600 cl:dark:border-red-400" : "cl:bg-[#777] cl:dark:bg-[#999]"}
            cl:peer-focus:bg-[#498BFF] cl:dark:peer-focus:bg-[#68A0FF]
            cl:peer-disabled:bg-[#555]
            cl:duration-500`}
          />
        )}
        {error && (
          <p className="cl:mt-1 cl:ml-2 cl:text-red-600 cl:dark:text-red-400">
            {error}
          </p>
        )}
      </div>
    </>
  );
};

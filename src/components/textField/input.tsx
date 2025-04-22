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
      input: `peer px-4 py-3 w-full text-lg outline-none border-2 text-[#333] dark:text-white
          ${error ? "border-red-600 dark:border-red-400" : "border-[#999]"} rounded-lg
          bg-inherit autofill-style-remove
          focus:border-[#498BFF]
          disabled:bg-[#DDD]
          duration-150`,
      label: `absolute left-0 top-4 ml-4! ${error ? "text-red-600 dark:text-red-400" : "text-[#777] dark:text-[#AAA]"} capitalize tracking-wide pointer-events-none
          bg-inherit
          peer-focus:text-sm peer-focus:-translate-y-6 peer-focus:px-1 peer-focus:text-[#498BFF] dark:peer-focus:text-[#68A0FF]
          ${value ? "text-sm -translate-y-6 px-1" : "text-base px-0"}
          peer-disabled:bg-[#DDD]
          duration-150`,
    },
    secondary: {
      input: `peer px-4 pb-1.5 pt-[22px] w-full text-base outline-none rounded-t-lg border-2 text-[#333] dark:text-white
          border-[#DDD] bg-[#DDD] dark:border-[#555] dark:bg-[#555] autofill-style-remove
          disabled:bg-[#BBB] disabled:border-[#BBB]
          duration-150`,
      label: `absolute left-0 top-4 ml-4! ${error ? "text-red-600 dark:text-red-400" : "text-[#777] dark:text-[#AAA]"} capitalize tracking-wide pointer-events-none
          peer-focus:text-xs peer-focus:-translate-y-2.5 peer-focus:-translate-x-1 peer-focus:px-1 peer-focus:text-[#498BFF] dark:peer-focus:text-[#68A0FF]
          peer-disabled:text-[#555]
          ${value ? "text-xs -translate-y-2.5 -translate-x-1 px-1" : "text-base px-0"}
          duration-150`,
    },
  };

  return (
    <>
      <div className="relative bg-inherit">
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
            className={`absolute w-full h-[2px] ${error ? "bg-red-600 dark:border-red-400" : "bg-[#777] dark:bg-[#999]"}
            peer-focus:bg-[#498BFF] dark:peer-focus:bg-[#68A0FF]
            peer-disabled:bg-[#555]
            duration-500`}
          />
        )}
        {error && (
          <p className="mt-1 ml-2 text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    </>
  );
};

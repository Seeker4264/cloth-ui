import { ChangeEvent } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  variant?: "primary" | "secondary";
  type?: "text" | "password";
  label?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  variant = "primary",
  type = "text",
  label = "Input",
  disabled = false,
  required = true,
  error,
  value,
  onChange,
  ...props
}) => {
  const inputClasses = {
    primary: {
      input: `peer px-4 py-3 w-full text-lg outline-none border-2
          ${error ? "border-red-600" : "border-[#999]"} rounded-lg bg-white
          focus:border-[#498BFF]
          disabled:bg-[#DDD]
          duration-150`,
      label: `absolute left-0 top-4 ml-4! ${error ? "text-red-600" : "text-[#777]"} capitalize tracking-wide pointer-events-none bg-white
          peer-focus:text-sm peer-focus:-translate-y-6 peer-focus:px-1 peer-focus:text-[#498BFF]
          ${value ? "text-sm -translate-y-6 px-1" : "text-base px-0"}
          peer-disabled:bg-[#DDD]
          duration-150`,
    },
    secondary: {
      input: `peer px-4 pb-1.5 pt-[22px] w-full text-base outline-none rounded-t-lg border-2 border-[#DDD] bg-[#DDD]
          disabled:bg-[#BBB] disabled:border-[#BBB]
          duration-150`,
      label: `absolute left-0 top-4 ml-4! ${error ? "text-red-600" : "text-[#777]"} capitalize tracking-wide pointer-events-none
          peer-focus:text-xs peer-focus:-translate-y-2.5 peer-focus:-translate-x-1 peer-focus:px-1 peer-focus:text-[#498BFF]
          ${value ? "text-xs -translate-y-2.5 -translate-x-1 px-1" : "text-base px-0"}
          duration-150`,
    },
  };

  return (
    <>
      <div className="relative">
        <input
          id={id}
          required={required}
          type={type}
          className={inputClasses[variant].input}
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...props}
        />
        <label htmlFor={id} className={inputClasses[variant].label}>
          {label}
          {required && " *"}
        </label>
        {variant === "secondary" && (
          <div
            className={`absolute w-full h-[2px] ${error ? "bg-red-600" : "bg-[#999]"}
            peer-focus:bg-[#498BFF]
            duration-500`}
          />
        )}
        {error && <p className="mt-1 ml-2 text-red-600">{error}</p>}
      </div>
    </>
  );
};

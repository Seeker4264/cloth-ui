import { ChangeEvent, useRef } from "react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  variant?: "primary" | "secondary";
  type?: "text" | "password";
  label?: string;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  variant = "primary",
  type = "text",
  label = "Input",
  disabled = false,
  required = true,
  // errorMessage = "Required",
  value,
  onChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputClasses = {
    primary: {
      input: `peer px-4 py-2 w-full text-lg outline-none border-2 border-[#999] rounded-lg bg-white
          focus:border-[#498BFF]
          disabled:bg-[#DDD]
          duration-150`,
      label: `absolute left-0 top-3 ml-4! text-[#777] capitalize tracking-wide pointer-events-none bg-white
          peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-[#498BFF]
          ${value ? "text-sm -translate-y-5 px-1" : "text-base px-0"}
          peer-disabled:bg-[#DDD]
          duration-150`,
    },
    secondary: {
      input: `peer px-4 py-2 w-full text-lg outline-none border-2 border-[#999] rounded-lg bg-white
          focus:border-[#498BFF]
          disabled:bg-[#DDD]
          duration-150`,
      label: `absolute left-0 top-3 ml-4! text-[#777] capitalize tracking-wide pointer-events-none bg-white
          peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-[#498BFF]
          ${value ? "text-sm -translate-y-5 px-1" : "text-base px-0"}
          peer-disabled:bg-[#DDD]
          duration-150`,
    },
  };

  const handleError = () => {
    const input = inputRef.current;

    if (input) {
      const label = input.labels;

      if (label) {
        input.classList.remove("border-red-400");
        label[0].classList.remove("text-red-400");
      }
    }
  };

  return (
    <>
      <div className="relative">
        <input
          id={id}
          ref={inputRef}
          required={required}
          type={type}
          className={inputClasses[variant].input}
          disabled={disabled}
          value={value}
          onChange={onChange}
          onClick={handleError}
          {...props}
        />
        <label htmlFor={id} className={inputClasses[variant].label}>
          {label}
          {required && " *"}
        </label>
      </div>
    </>
  );
};

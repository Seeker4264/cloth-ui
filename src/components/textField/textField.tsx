import { ChangeEvent } from "react";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  variant?: "primary" | "secondary";
  type?: "field" | "box";
  label?: string;
  disabled?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  // type = "field",
  id,
  // variant = "primary",
  label = "Input",
  disabled = false,
  value,
  onChange,
  ...props
}) => {
  return (
    <>
      <div className="relative">
        <input
          id={id}
          required
          type="text"
          className="peer px-4 py-2 w-full text-lg outline-none border-2 border-[#999] rounded-lg bg-white
          focus:border-[#498BFF]
          disabled:bg-[#DDD]
          duration-150"
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute left-0 top-3 px-0 ml-4! text-base text-[#777] uppercase tracking-wide pointer-events-none bg-white
          peer-focus:text-sm peer-focus:-translate-y-5 peer-focus:px-1 peer-focus:text-[#498BFF]
          peer-valid:text-sm peer-valid:-translate-y-5 peer-valid:px-1
          peer-disabled:bg-[#DDD]
          duration-150"
        >
          {label}
        </label>
      </div>
    </>
  );
};

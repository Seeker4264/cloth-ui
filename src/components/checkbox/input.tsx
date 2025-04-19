import { ChangeEvent } from "react";

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
      <div className="flex flex-row items-center gap-2">
        <label
          htmlFor={id}
          className="flex items-center cursor-pointer relative p-1"
        >
          <input
            id={id}
            required={required}
            type="checkbox"
            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#498BFF] checked:border-[#498BFF]"
            disabled={disabled}
            checked={checked}
            readOnly={readOnly}
            onChange={onChange}
            {...props}
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="size-3.5"
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
        <p className="text-base font-medium text-[#333]">{label}</p>
      </div>
    </>
  );
};

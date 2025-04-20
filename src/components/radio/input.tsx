import { ChangeEvent } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  value: string;
  name: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  label = "Input",
  disabled = false,
  required = false,
  readOnly = false,
  value,
  name,
  checked,
  onChange,
  ...props
}) => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <label
          htmlFor={id}
          className="flex items-center cursor-pointer relative p-1 m-0.5"
        >
          <input
            id={id}
            required={required}
            type="radio"
            className="peer size-4 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-[#498BFF] checked:border-[#498BFF]
            checked:ring-blue-500 checked:ring-2 checked:ring-offset-2
            focus:ring-blue-500 focus:ring-2 focus:ring-offset-2"
            disabled={disabled}
            value={value}
            name={name}
            checked={checked}
            readOnly={readOnly}
            onChange={onChange}
            {...props}
          />
        </label>
        <p className="text-base font-medium text-[#333]">{label}</p>
      </div>
    </>
  );
};

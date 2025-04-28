import React, { ChangeEvent } from "react";

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
      <div className="cl:flex cl:flex-row cl:items-center cl:gap-2">
        <label
          htmlFor={id}
          className="cl:flex cl:items-center cl:cursor-pointer cl:relative cl:p-1 cl:m-0.5"
        >
          <input
            id={id}
            required={required}
            type="radio"
            className="cl:peer cl:size-4 cl:cursor-pointer cl:transition-all cl:appearance-none cl:rounded-full cl:shadow cl:hover:shadow-md cl:border
            cl:border-slate-300 cl:checked:bg-[#498BFF] cl:checked:border-[#498BFF]
            cl:checked:ring-blue-500 cl:checked:ring-2 cl:checked:ring-offset-2
            cl:focus:ring-blue-500 cl:focus:ring-2 cl:focus:ring-offset-2"
            disabled={disabled}
            value={value}
            name={name}
            checked={checked}
            readOnly={readOnly}
            onChange={onChange}
            {...props}
          />
        </label>
        <p className="cl:text-base cl:font-medium cl:text-[#333] cl:dark:text-white">
          {label}
        </p>
      </div>
    </>
  );
};

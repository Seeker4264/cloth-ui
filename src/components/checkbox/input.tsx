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
      <div>
        <input
          id={id}
          required={required}
          type="checkbox"
          className=""
          disabled={disabled}
          checked={checked}
          readOnly={readOnly}
          onChange={onChange}
          {...props}
        />
        <label htmlFor={id} className="">
          {label}
        </label>
      </div>
    </>
  );
};

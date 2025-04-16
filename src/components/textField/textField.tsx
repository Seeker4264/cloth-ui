import { useContext } from "react";
import { Input, InputProps } from "./input";
import { FormContext } from "#components/form/form.tsx";
import { requiredVal } from "#utils/validations.ts";

export interface TextFieldProps extends InputProps {
  name: string;
  validation?: (value: string) => string | undefined;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  variant = "primary",
  type = "text",
  label = "Input",
  disabled = false,
  required = true,
  validation = required ? requiredVal() : () => undefined,
  ...props
}) => {
  const { values, errors, setErrors, handleChange } = useContext(FormContext);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validation) {
      const error = validation(e.target.value);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    }
  };

  return (
    <Input
      id={id}
      required={required}
      variant={variant}
      type={type}
      label={label}
      disabled={disabled}
      onBlur={handleBlur}
      error={errors[name]}
      {...props}
      value={values[name] || ""}
      onChange={(e) => handleChange(name, e.target.value)}
    />
  );
};

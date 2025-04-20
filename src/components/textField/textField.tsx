import React, { useContext } from "react";
import { Input, InputProps } from "./input";
import { FormContext } from "#components/form/form.tsx";
import { requiredVal } from "#utils/validations.ts";

export interface TextFieldProps extends Omit<InputProps, "value"> {
  validation?: (value: string) => string | undefined;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  variant,
  type,
  label,
  disabled,
  required,
  readOnly,
  validation = required ? requiredVal() : () => undefined,
  ...props
}) => {
  const { values, errors, setErrors, handleChange } = useContext(FormContext);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (validation) {
      const error = validation(e.target.value);
      if (error) {
        setErrors((prev) => ({ ...prev, [id]: error }));
      }
    }
  };

  const typeConversion = (function () {
    switch (type) {
      case "number":
        return "number";
      default:
        return "string";
    }
  })();

  return (
    <Input
      id={id}
      required={required}
      variant={variant}
      type={type}
      label={label}
      disabled={disabled}
      readOnly={readOnly}
      onBlur={handleBlur}
      error={errors[id]}
      {...props}
      value={
        (type === "number" ? (values[id] as number) : (values[id] as string)) ||
        ""
      }
      onChange={(e) => handleChange(id, e.target.value, typeConversion)}
    />
  );
};

import React, { useContext } from "react";
import { Input, InputProps } from "./input";
import { FormContext } from "#components/form/form.tsx";

export const Radio: React.FC<Omit<InputProps, "checked">> = ({
  id,
  label,
  disabled,
  required,
  readOnly,
  value,
  name,
  ...props
}) => {
  const { values, handleChange } = useContext(FormContext);

  return (
    <Input
      id={id}
      required={required}
      label={label}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      name={name}
      {...props}
      checked={values[name] === value}
      onChange={(e) => handleChange(name, e.target.value)}
    />
  );
};

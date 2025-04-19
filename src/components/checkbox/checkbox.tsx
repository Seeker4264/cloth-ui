import { useContext } from "react";
import { Input, InputProps } from "./input";
import { FormContext } from "#components/form/form.tsx";

export const Checkbox: React.FC<Omit<InputProps, "checked">> = ({
  id,
  label,
  disabled,
  required,
  readOnly,
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
      {...props}
      checked={Boolean(values[id])}
      onChange={(e) => handleChange(id, e.target.checked)}
    />
  );
};

import React from "react";
import { TextField, Button, Form, FormValues } from "#main";

interface TextFieldExampleProps {
  id: string;
  variant?: "primary" | "secondary";
  dark?: boolean;
  type?: "text" | "password" | "number";
  label?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
}

const TextFieldExample: React.FC<TextFieldExampleProps> = ({
  id,
  variant,
  dark = false,
  type,
  label,
  disabled,
  required,
  readonly,
}) => {
  const handleSubmit = (data: FormValues) => {
    console.log(data[id], typeof data[id]);
  };

  return (
    <Form
      id="myForm"
      className={`${dark ? "dark" : ""} cl:flex cl:flex-col cl:gap-4 cl:w-[20rem] cl:p-5 cl:bg-white cl:dark:bg-[#333]`}
      submit={handleSubmit}
    >
      <TextField
        id={id}
        required={required}
        variant={variant}
        type={type}
        label={label}
        disabled={disabled}
        readOnly={readonly}
      />
      <Button buttonType="submit" text="Submit" variant="secondary" />
    </Form>
  );
};

export default TextFieldExample;

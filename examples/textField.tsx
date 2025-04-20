import React from "react";
import { TextField, Button, Form, FormValues } from "#main";

interface TextFieldExampleProps {
  id: string;
  variant?: "primary" | "secondary";
  type?: "text" | "password" | "number";
  label?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
}

const TextFieldExample: React.FC<TextFieldExampleProps> = ({
  id,
  variant,
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
      className="flex flex-col gap-4 w-[20rem]"
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

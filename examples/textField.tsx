import React, { useState } from "react";
import { TextField } from "#components/textField/textField.tsx";
import { Button } from "#components/button/button.tsx";
import { Form } from "#components/form/form.tsx";

export interface TextFieldExampleProps {
  id: string;
  variant?: "primary" | "secondary";
  type?: "text" | "password";
  label?: string;
  disabled?: boolean;
  required?: boolean;
}

const TextFieldExample: React.FC<TextFieldExampleProps> = ({
  id,
  variant = "primary",
  type = "text",
  label = "Input",
  disabled = false,
  required = true,
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log(value);
  };

  return (
    <Form
      id="myForm"
      className="flex flex-col gap-4 w-[20rem]"
      submit={handleSubmit}
    >
      <TextField
        id={id}
        name={id}
        required={required}
        variant={variant}
        type={type}
        label={label}
        disabled={disabled}
        value={value}
        onValueChange={setValue}
      />
      <Button buttonType="submit" text="Submit" variant="secondary" />
    </Form>
  );
};

export default TextFieldExample;

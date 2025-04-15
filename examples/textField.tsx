import React, { useState } from "react";
import { TextField } from "#components/textField/textField.tsx";
import { Button } from "#components/button/button.tsx";
import { Form } from "#components/form/form.tsx";

export interface TextFieldExampleProps {
  id: string;
  variant?: "primary" | "secondary";
  inputType?: "field" | "box";
  label?: string;
  disabled?: boolean;
  required?: boolean;
}

const TextFieldExample: React.FC<TextFieldExampleProps> = ({
  id,
  variant = "primary",
  label = "Input",
  disabled = false,
  required = true,
}) => {
  const [value, setValue] = useState("");

  return (
    <Form id="myForm" className="flex flex-col gap-4 w-[20rem]">
      <TextField
        id={id}
        required={required}
        variant={variant}
        label={label}
        disabled={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button buttonType="submit" text="Submit" variant="secondary" />
    </Form>
  );
};

export default TextFieldExample;

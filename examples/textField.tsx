import React, { useState } from "react";
import { TextField } from "#components/textField/textField.tsx";
import { Button } from "#components/button/button.tsx";

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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (value) {
      console.log(value);
    } else {
      console.error("no value");
    }
  };

  return (
    <>
      <form className="flex flex-col gap-4 w-[20rem]" onSubmit={handleSubmit}>
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
      </form>
    </>
  );
};

export default TextFieldExample;

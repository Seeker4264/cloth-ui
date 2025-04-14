import React, { useState } from "react";
import { TextField } from "#components/textField/textField.tsx";
import { Button } from "#components/button/button.tsx";

export interface TextFieldExampleProps {
  id: string;
  variant?: "primary" | "secondary";
  type?: "field" | "box";
  label?: string;
  disabled?: boolean;
}

const TextFieldExample: React.FC<TextFieldExampleProps> = ({
  id,
  variant = "primary",
  label = "Input",
  disabled = false,
}) => {
  const [checked, setChecked] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(checked);
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 w-[20rem]"
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField
          id={id}
          required
          variant={variant}
          label={label}
          disabled={disabled}
          value={checked}
          onChange={(e) => setChecked(e.target.value)}
        />
        <Button buttonType="submit" text="Submit" variant="secondary" />
      </form>
    </>
  );
};

export default TextFieldExample;

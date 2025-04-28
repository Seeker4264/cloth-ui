import React, { useState } from "react";
import { Switch, Button } from "#main";

interface SwitchExampleProps {
  id: string;
  disabled?: boolean;
  dark?: boolean;
}

const SwitchExample: React.FC<SwitchExampleProps> = ({
  id,
  disabled = false,
  dark = false,
}) => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(checked);
  };

  return (
    <>
      <form
        className={`cl:flex cl:flex-col cl:gap-4 cl:w-fit ${dark ? "dark" : ""}`}
        onSubmit={handleSubmit}
      >
        <Switch
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={() => setChecked((e) => !e)}
        />
        <Button buttonType="submit" text="Submit" variant="secondary" />
      </form>
    </>
  );
};

export default SwitchExample;

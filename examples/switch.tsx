import React, { useState } from "react";
import { Switch, Button } from "#main";

interface SwitchExampleProps {
  id: string;
  disabled?: boolean;
}

const SwitchExample: React.FC<SwitchExampleProps> = ({
  id,
  disabled = false,
}) => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(checked);
  };

  return (
    <>
      <form className="flex flex-col gap-4 w-fit" onSubmit={handleSubmit}>
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

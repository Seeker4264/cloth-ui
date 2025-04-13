import React, { useState } from "react";
import { Switch } from "#components/switch/switch.tsx";

export interface SwitchExampleProps {
  disabled?: boolean;
}

const SwitchExample: React.FC<SwitchExampleProps> = ({ disabled = false }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Switch
        disabled={disabled}
        checked={checked}
        onClick={() => setChecked((e) => !e)}
      />
    </>
  );
};

export default SwitchExample;

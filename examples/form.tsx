import React, { useState } from "react";
import { TextField } from "#components/textField/textField.tsx";
import { Button } from "#components/button/button.tsx";
import { Form } from "#components/form/form.tsx";

export interface FormExampleProps {
  id: string;
}

const FormExample: React.FC<FormExampleProps> = ({ id }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form id={id} className="flex flex-col gap-4 w-[20rem]">
      <TextField
        id="username"
        required
        variant="primary"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        id="password"
        required
        variant="primary"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button buttonType="submit" text="Submit" variant="secondary" />
    </Form>
  );
};

export default FormExample;

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
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Logged in successfully");
  };

  return (
    <Form
      id={id}
      className="flex flex-col gap-4 w-[20rem]"
      submit={handleSubmit}
    >
      <TextField
        id="username"
        name="username"
        required
        variant="primary"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        id="password"
        name="password"
        required
        type="password"
        variant="primary"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        id="email"
        name="email"
        required={false}
        type="text"
        variant="primary"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button buttonType="submit" text="Submit" variant="secondary" />
    </Form>
  );
};

export default FormExample;

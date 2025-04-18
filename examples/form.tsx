import React, { useState } from "react";
import { TextField, Button, Form } from "#main";

export interface FormExampleProps {
  id: string;
}

const FormExample: React.FC<FormExampleProps> = ({ id }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const passwordValidation = (length: number) => (value: string) => {
    if (!value || value.trim() === "") return "This field is required";
    if (value.length < length) return `Must be at least ${length} characters`;
    return undefined;
  };

  const handleSubmit = () => {
    console.log(username);
    console.log(password);
    if (email) console.log(email);
  };

  return (
    <Form
      id={id}
      className="flex flex-col gap-4 w-[20rem]"
      submit={handleSubmit}
    >
      <TextField
        id="username"
        required
        variant="primary"
        label="Username"
        value={username}
        onValueChange={setUsername}
      />
      <TextField
        id="password"
        required
        type="password"
        variant="primary"
        label="Password"
        value={password}
        onValueChange={setPassword}
        validation={passwordValidation(8)}
      />
      <TextField
        id="email"
        type="text"
        variant="primary"
        label="Email"
        value={email}
        onValueChange={setEmail}
      />
      <Button buttonType="submit" text="Submit" variant="secondary" />
    </Form>
  );
};

export default FormExample;

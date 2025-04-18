import React from "react";
import { TextField, Button, Form, FormValues } from "#main";

export interface FormExampleProps {
  id: string;
}

const FormExample: React.FC<FormExampleProps> = ({ id }) => {
  const passwordValidation = (length: number) => (value: string) => {
    if (!value || value.trim() === "") return "This field is required";
    if (value.length < length) return `Must be at least ${length} characters`;
    return undefined;
  };

  const handleSubmit = (data: FormValues) => {
    console.log(data["username"], typeof data["username"]);
    console.log(data["password"], typeof data["password"]);
    console.log(data["age"], typeof data["age"]);
    console.log(data["email"], typeof data["email"]);
  };

  return (
    <Form
      id={id}
      className="flex flex-col gap-4 w-[20rem]"
      submit={handleSubmit}
    >
      <TextField id="username" required variant="primary" label="Username" />
      <TextField
        id="password"
        required
        type="password"
        variant="primary"
        label="Password"
        validation={passwordValidation(8)}
      />
      <TextField
        id="age"
        required
        type="number"
        variant="primary"
        label="Age"
      />
      <TextField id="email" type="text" variant="primary" label="Email" />
      <Button buttonType="submit" text="Submit" variant="secondary" />
    </Form>
  );
};

export default FormExample;

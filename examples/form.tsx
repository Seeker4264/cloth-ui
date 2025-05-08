import React from "react";
import { TextField, Button, Form, FormValues, Checkbox, Radio } from "#main";

interface FormExampleProps {
  id: string;
  dark?: boolean;
}

const FormExample: React.FC<FormExampleProps> = ({ id, dark = false }) => {
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
    console.log(data["tos"], typeof data["tos"]);
    console.log(data["newsletter"], typeof data["newsletter"]);
    console.log(data["settings"], typeof data["settings"]);
    console.log(data);
  };

  return (
    <Form
      id={id}
      className={`${dark ? "dark" : ""} cl:flex cl:flex-col cl:gap-4 cl:w-[20rem] cl:p-5 cl:bg-white cl:dark:bg-[#333] cl:duration-150`}
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
      <Checkbox id="tos" label="Accept Terms of Service" />
      <Checkbox id="newsletter" label="Subscribe to newsletter" />
      <Radio
        id="radio1"
        label="Use default settings for the account"
        value="default"
        name="settings"
      />
      <Radio
        id="radio2"
        label="Customize settings"
        value="custom"
        name="settings"
      />
      <Button buttonType="submit" text="Submit" variant="secondary" />
    </Form>
  );
};

export default FormExample;

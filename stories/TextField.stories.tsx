import type { Meta, StoryObj } from "@storybook/react";

import TextFieldExample from "#examples/textField.tsx";

const meta: Meta<typeof TextFieldExample> = {
  component: TextFieldExample,
};

export default meta;
type Story = StoryObj<typeof TextFieldExample>;

export const Primary: Story = {
  args: {
    id: "inputField",
    variant: "primary",
    label: "Username",
    disabled: false,
    required: false,
    readonly: false,
  },
};

export const Secondary: Story = {
  args: {
    id: "inputField",
    variant: "secondary",
    type: "password",
    label: "Password",
    disabled: false,
    required: false,
    readonly: false,
  },
};

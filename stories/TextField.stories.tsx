import type { Meta, StoryObj } from "@storybook/react";

import TextFieldExample from "#examples/textField.tsx";

const meta: Meta<typeof TextFieldExample> = {
  component: TextFieldExample,
};

export default meta;
type Story = StoryObj<typeof TextFieldExample>;

export const PrimaryText: Story = {
  args: {
    id: "inputField",
    variant: "primary",
    label: "Username",
    disabled: false,
    required: false,
    readonly: false,
  },
};

export const SecondaryText: Story = {
  args: {
    id: "inputField",
    variant: "secondary",
    label: "Username",
    disabled: false,
    required: false,
    readonly: false,
  },
};

export const PrimaryPassword: Story = {
  args: {
    id: "inputField",
    variant: "primary",
    type: "password",
    label: "Password",
    disabled: false,
    required: false,
    readonly: false,
  },
};

export const SecondaryPassword: Story = {
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

export const PrimaryNumber: Story = {
  args: {
    id: "inputField",
    variant: "primary",
    type: "number",
    label: "Amount",
    disabled: false,
    required: false,
    readonly: false,
  },
};

export const SecondaryNumber: Story = {
  args: {
    id: "inputField",
    variant: "secondary",
    type: "number",
    label: "Amount",
    disabled: false,
    required: false,
    readonly: false,
  },
};

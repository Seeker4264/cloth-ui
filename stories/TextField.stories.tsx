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
    dark: false,
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
    dark: false,
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
    dark: false,
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
    dark: false,
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
    dark: false,
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
    dark: false,
    type: "number",
    label: "Amount",
    disabled: false,
    required: false,
    readonly: false,
  },
};

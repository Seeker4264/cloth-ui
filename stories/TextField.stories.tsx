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
    required: true,
  },
};

export const Secondary: Story = {
  args: {
    id: "inputField",
    variant: "secondary",
    label: "Username",
    disabled: false,
    required: true,
  },
};

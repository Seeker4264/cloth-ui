import type { Meta, StoryObj } from "@storybook/react";

import ButtonExample from "#examples/button.tsx";

const meta: Meta<typeof ButtonExample> = {
  component: ButtonExample,
};

export default meta;
type Story = StoryObj<typeof ButtonExample>;

export const Primary: Story = {
  args: {
    variant: "primary",
    disabled: false,
    text: "Submit",
    icon: false,
    iconPosition: "left",
    onClick: () => {},
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    disabled: false,
    text: "Submit",
    icon: false,
    iconPosition: "left",
    onClick: () => {},
  },
};

export const SecondaryAlt: Story = {
  args: {
    variant: "secondaryAlt",
    disabled: false,
    text: "Submit",
    icon: false,
    iconPosition: "left",
    onClick: () => {},
  },
};

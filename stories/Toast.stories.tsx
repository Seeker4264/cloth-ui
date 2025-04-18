import type { Meta, StoryObj } from "@storybook/react";

import ToastExample from "#examples/toast.tsx";

const meta: Meta<typeof ToastExample> = {
  component: ToastExample,
};

export default meta;
type Story = StoryObj<typeof ToastExample>;

export const Primary: Story = {
  args: {},
};

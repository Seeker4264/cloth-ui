import type { Meta, StoryObj } from "@storybook/react";

import ModalExample from "#examples/modal.tsx";

const meta: Meta<typeof ModalExample> = {
  component: ModalExample,
};

export default meta;
type Story = StoryObj<typeof ModalExample>;

export const Primary: Story = {
  args: {},
};

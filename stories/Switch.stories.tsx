import type { Meta, StoryObj } from "@storybook/react";

import SwitchExample from "#examples/switch.tsx";

const meta: Meta<typeof SwitchExample> = {
  component: SwitchExample,
};

export default meta;
type Story = StoryObj<typeof SwitchExample>;

export const Primary: Story = {
  args: {
    id: "switch",
    disabled: false,
  },
};

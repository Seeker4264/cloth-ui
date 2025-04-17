import type { Meta, StoryObj } from "@storybook/react";

import TabsExample from "#examples/tabs.tsx";

const meta: Meta<typeof TabsExample> = {
  component: TabsExample,
};

export default meta;
type Story = StoryObj<typeof TabsExample>;

export const Primary: Story = {
  args: {
    variant: "primary",
    disabledTabs: [],
  },
};

export const PrimaryDisabledTab: Story = {
  args: {
    variant: "primary",
    disabledTabs: [2],
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    disabledTabs: [],
  },
};

export const SecondaryDisabledTab: Story = {
  args: {
    variant: "secondary",
    disabledTabs: [2],
  },
};

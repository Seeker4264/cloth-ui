import type { Meta, StoryObj } from "@storybook/react";

import TabsExample from "#examples/tabs.tsx";

const meta: Meta<typeof TabsExample> = {
  component: TabsExample,
};

export default meta;
type Story = StoryObj<typeof TabsExample>;

export const Tabs: Story = {
  args: {
    dark: false,
    disabledTabs: [],
  },
};

export const TabsDisabledTab: Story = {
  args: {
    dark: false,
    disabledTabs: [2],
  },
};

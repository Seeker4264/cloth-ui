import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "#components/button/index.tsx";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    disabled: false,
    text: "Hello World!",
    onClick: () => {},
  },
};

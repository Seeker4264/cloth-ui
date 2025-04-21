import type { Meta, StoryObj } from "@storybook/react";

import FormExample from "#examples/form.tsx";

const meta: Meta<typeof FormExample> = {
  component: FormExample,
};

export default meta;
type Story = StoryObj<typeof FormExample>;

export const Primary: Story = {
  args: {
    id: "myForm",
    dark: false,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import CarouselExample from "#examples/carousel.tsx";

const meta: Meta<typeof CarouselExample> = {
  component: CarouselExample,
};

export default meta;
type Story = StoryObj<typeof CarouselExample>;

export const Primary: Story = {
  args: {
    autoSlide: false,
    autoSlideInterval: 5000,
  },
};

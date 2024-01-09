import type { Meta, StoryObj } from "@storybook/react";

import { Stars } from "@hello/components/atoms";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Stars",
  component: Stars,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    value: {
      control: { type: "number", min: 0 },
    },
    size: {
      control: { type: "number", min: 0 },
    },
  },
} satisfies Meta<typeof Stars>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultStars: Story = {
  args: {},
};

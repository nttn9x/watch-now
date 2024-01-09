import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "@hello/components/atoms";

import BonJovi from "./assets/bon_jovi.png";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Image",
  component: Image,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultImage: Story = {
  args: {
    alt: "Men is wearing a bikini",
    src: BonJovi,
  },
};

export const EmptyImage: Story = {
  args: {
    alt: "Men is wearing a bikini",
  },
};

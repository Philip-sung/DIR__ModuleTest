import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

/**
 * 01. Component Metadata
 * @title Where it belongs in the Storybook hierarchy.
 * @component What component you are showcasing.
 * @parameters
 */
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: { layout: "centered" },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

/**
 * 02. Component Templates
 */
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    onClick: fn(() => {
      console.log("Hi");
    }),
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

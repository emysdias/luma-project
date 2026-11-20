import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { People } from "./People";

const meta = {
  title: "Sections/People",
  component: People,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof People>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

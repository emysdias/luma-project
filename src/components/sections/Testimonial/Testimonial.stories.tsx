import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Testimonial } from "./Testimonial";

const meta = {
  title: "Sections/Testimonial",
  component: Testimonial,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

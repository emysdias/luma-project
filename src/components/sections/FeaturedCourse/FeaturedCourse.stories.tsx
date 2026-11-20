import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedCourse } from "./FeaturedCourse";

const meta = {
  title: "Sections/FeaturedCourse",
  component: FeaturedCourse,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FeaturedCourse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

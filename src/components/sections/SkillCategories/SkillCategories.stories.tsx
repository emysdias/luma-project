import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SkillCategories } from "./SkillCategories";

const meta = {
  title: "Sections/SkillCategories",
  component: SkillCategories,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SkillCategories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

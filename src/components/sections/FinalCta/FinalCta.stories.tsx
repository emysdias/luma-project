import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FinalCta } from "./FinalCta";

const meta = {
  title: "Sections/FinalCta",
  component: FinalCta,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof FinalCta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

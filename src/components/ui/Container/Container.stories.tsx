import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container } from "./Container";

const meta = {
  title: "UI/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
  args: { children: <div className="rounded-lg bg-brand-soft p-6 text-ink">Content is centred and capped at 1184px.</div> },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

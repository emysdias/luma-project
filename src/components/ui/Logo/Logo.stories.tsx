import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Logo } from "./Logo";

const meta = {
  title: "UI/Logo",
  component: Logo,
  argTypes: { tone: { control: "inline-radio", options: ["ink", "light"] } },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ink: Story = {};
export const Light: Story = {
  args: { tone: "light" },
  decorators: [(Story) => <div className="bg-ink p-6"><Story /></div>],
};

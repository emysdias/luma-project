import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Heading } from "./Heading";

const meta = {
  title: "UI/Heading",
  component: Heading,
  args: { children: "Learn something worth knowing." },
  argTypes: {
    as: { control: "inline-radio", options: ["h1", "h2", "h3"] },
    size: { control: "select", options: ["hero", "display", "section", "title"] },
    tone: { control: "inline-radio", options: ["ink", "light"] },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Section: Story = {};
export const Hero: Story = { args: { as: "h1", size: "hero" } };
export const Display: Story = { args: { size: "display" } };
export const Title: Story = { args: { as: "h3", size: "title" } };
export const Light: Story = {
  args: { tone: "light" },
  decorators: [(Story) => <div className="bg-brand p-6"><Story /></div>],
};

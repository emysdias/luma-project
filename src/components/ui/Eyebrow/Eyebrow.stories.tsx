import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Eyebrow } from "./Eyebrow";

const meta = {
  title: "UI/Eyebrow",
  component: Eyebrow,
  args: { children: "Find your next skill" },
  argTypes: { tone: { control: "inline-radio", options: ["brand", "light"] } },
} satisfies Meta<typeof Eyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = {};
export const Light: Story = {
  args: { tone: "light" },
  parameters: { backgrounds: { default: "brand" } },
  decorators: [(Story) => <div className="bg-brand p-6"><Story /></div>],
};

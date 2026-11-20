import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { TextLink } from "./TextLink";

const meta = {
  title: "UI/TextLink",
  component: TextLink,
  args: { href: "#", children: "Explore" },
  argTypes: { tone: { control: "inline-radio", options: ["ink", "light"] } },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ink: Story = {};
export const Light: Story = {
  args: { tone: "light" },
  decorators: [(Story) => <div className="bg-brand p-6"><Story /></div>],
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  args: { children: "Get started", onClick: fn() },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "accent"] },
    size: { control: "inline-radio", options: ["md", "lg"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ canvasElement, args }) => {
    await userEvent.click(within(canvasElement).getByRole("button", { name: "Get started" }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Accent: Story = { args: { variant: "accent" } };
export const Medium: Story = { args: { size: "md" } };
export const Disabled: Story = { args: { disabled: true } };
export const AsLink: Story = { args: { href: "/signup", onClick: undefined, children: "Create account" } };

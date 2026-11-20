import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { SignupForm } from "./SignupForm";

const meta = {
  title: "Auth/SignupForm",
  component: SignupForm,
  decorators: [(Story) => <div className="w-[28rem]"><Story /></div>],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InvalidSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /create account/i }));
    await expect(canvas.getByText("Please enter your full name.")).toBeInTheDocument();
  },
};

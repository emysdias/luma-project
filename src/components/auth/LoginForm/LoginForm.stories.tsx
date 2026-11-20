import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { LoginForm } from "./LoginForm";

const meta = {
  title: "Auth/LoginForm",
  component: LoginForm,
  decorators: [(Story) => <div className="w-[28rem]"><Story /></div>],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InvalidSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /log in/i }));
    await expect(canvas.getByText("Please enter a valid email address.")).toBeInTheDocument();
  },
};

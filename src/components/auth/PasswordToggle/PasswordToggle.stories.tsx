import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { expect, userEvent, within } from "storybook/test";
import { PasswordToggle } from "./PasswordToggle";

const meta = {
  title: "Auth/PasswordToggle",
  component: PasswordToggle,
  args: { visible: false, onToggle: () => {} },
} satisfies Meta<typeof PasswordToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Hidden: Story = {};
export const Visible: Story = { args: { visible: true } };

export const Interactive: Story = {
  render: function Render() {
    const [visible, setVisible] = useState(false);
    return <PasswordToggle visible={visible} onToggle={() => setVisible((value) => !value)} />;
  },
  play: async ({ canvasElement }) => {
    const toggle = within(canvasElement).getByRole("button", { name: "Show password" });
    await userEvent.click(toggle);
    await expect(toggle).toHaveAttribute("aria-pressed", "true");
  },
};

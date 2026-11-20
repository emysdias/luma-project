import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { ContactForm } from "./ContactForm";

const meta = {
  title: "Sections/ContactForm",
  component: ContactForm,
  decorators: [(Story) => <div className="w-[34rem]"><Story /></div>],
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InvalidSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /send message/i }));
    await expect(canvas.getByText("Please enter your full name.")).toBeInTheDocument();
  },
};

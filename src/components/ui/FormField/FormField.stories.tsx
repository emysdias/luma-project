import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

const meta: Meta<typeof FormField> = {
  title: "UI/FormField",
  component: FormField,
  decorators: [(Story) => <div className="w-96"><Story /></div>],
  args: { id: "email", label: "Email", type: "email", placeholder: "youremail@example.com" },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {};
export const WithError: Story = { args: { error: "Please enter a valid email address." } };
export const Disabled: Story = { args: { disabled: true } };
export const Textarea: Story = { args: { id: "message", label: "Message", as: "textarea", placeholder: "How can we help?" } };

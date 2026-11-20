import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AuthCard } from "./AuthCard";

const meta = {
  title: "Auth/AuthCard",
  component: AuthCard,
  decorators: [(Story) => <div className="w-[28rem]"><Story /></div>],
  args: {
    title: "Welcome back",
    description: "Log in to pick up where you left off.",
    footer: { text: "New to Luma?", linkLabel: "Create an account", href: "/signup" },
    children: <p className="mt-8 rounded-lg bg-cream p-6 text-center text-muted">Form goes here</p>,
  },
} satisfies Meta<typeof AuthCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

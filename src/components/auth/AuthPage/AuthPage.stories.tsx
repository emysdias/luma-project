import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { login } from "@/data/site";
import { AuthPage } from "./AuthPage";
import { LoginForm } from "@/components/auth/LoginForm";

const meta = {
  title: "Auth/AuthPage",
  component: AuthPage,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof AuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    eyebrow: login.eyebrow,
    title: login.title,
    description: login.description,
    benefits: login.benefits,
    children: <LoginForm />,
  },
};

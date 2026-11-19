import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";
import { LoginForm } from "@/components/auth/LoginForm";
import { login } from "@/data/site";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to Luma to continue your courses and track your progress.",
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return (
    <AuthPage eyebrow={login.eyebrow} title={login.title} description={login.description} benefits={login.benefits}>
      <LoginForm />
    </AuthPage>
  );
}

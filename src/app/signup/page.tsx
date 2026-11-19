import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";
import { SignupForm } from "@/components/auth/SignupForm";
import { signup } from "@/data/site";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Join Luma and start learning with short, practical courses taught by experts.",
  robots: { index: false, follow: true },
};

export default function SignupPage() {
  return (
    <AuthPage eyebrow={signup.eyebrow} title={signup.title} description={signup.description} benefits={signup.benefits}>
      <SignupForm />
    </AuthPage>
  );
}

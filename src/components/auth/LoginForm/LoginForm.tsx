"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { login } from "@/data/site";
import { AuthCard } from "@/components/auth/AuthCard";
import { PasswordToggle } from "@/components/auth/PasswordToggle";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { saveSession } from "@/lib/session";
import { useMockForm } from "@/lib/useMockForm";
import { isValidEmail, MIN_PASSWORD_LENGTH } from "@/lib/validation";

type FormValues = { email: string; password: string };

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!isValidEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Your password must have at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  return errors;
}

export function LoginForm() {
  const id = useId();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const fieldId = (name: keyof FormValues) => `${id}-${name}`;

  const form = useMockForm<FormValues>({
    initialValues: { email: "", password: "" },
    validate,
    fieldId,
    onSubmit: async (values) => {
      // Mock authentication: no backend, any valid input signs the user in.
      await new Promise((resolve) => setTimeout(resolve, 800));
      saveSession(values.email.trim());
      window.setTimeout(() => router.push("/"), 1200);
    },
  });

  const busy = form.status !== "idle";

  return (
    <AuthCard
      title={login.form.title}
      description={login.form.description}
      footer={{ text: "New to Luma?", linkLabel: "Create an account", href: "/signup" }}
    >
      <form noValidate onSubmit={form.handleSubmit} className="mt-8 flex flex-col gap-6" aria-describedby={`${id}-status`}>
        <FormField
          id={fieldId("email")}
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="youremail@example.com"
          value={form.values.email}
          onInput={form.update("email")}
          error={form.errors.email}
          disabled={busy}
        />
        <FormField
          id={fieldId("password")}
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
          value={form.values.password}
          onInput={form.update("password")}
          error={form.errors.password}
          disabled={busy}
          labelAside={
            <Link href="/#contact" className="focus-ring rounded-sm text-sm font-medium text-brand hover:underline">
              Forgot password?
            </Link>
          }
          trailing={<PasswordToggle visible={showPassword} onToggle={() => setShowPassword((value) => !value)} />}
        />

        <label className="flex items-center gap-3 text-[15px] text-ink">
          <input
            type="checkbox"
            name="remember"
            defaultChecked
            disabled={busy}
            className="focus-ring size-[18px] rounded border-line accent-brand"
          />
          Keep me logged in
        </label>

        <Button type="submit" className="mt-2 w-full" disabled={busy}>
          {form.status === "submitting" ? "Logging in…" : form.status === "success" ? "Logged in" : login.form.submitLabel}
        </Button>

        <p id={`${id}-status`} role="status" aria-live="polite" className="text-[15px] text-ink">
          {form.status === "success" ? "Welcome back! Taking you to your courses…" : ""}
        </p>
      </form>
    </AuthCard>
  );
}

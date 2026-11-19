"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { signup } from "@/data/site";
import { AuthCard } from "@/components/auth/AuthCard";
import { PasswordToggle } from "@/components/auth/PasswordToggle";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { saveSession } from "@/lib/session";
import { useMockForm } from "@/lib/useMockForm";
import { isValidEmail, MIN_PASSWORD_LENGTH } from "@/lib/validation";

type FormValues = { name: string; email: string; password: string };

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!isValidEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Use at least ${MIN_PASSWORD_LENGTH} characters for your password.`;
  }
  return errors;
}

export function SignupForm() {
  const id = useId();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [termsError, setTermsError] = useState<string | undefined>();
  const fieldId = (name: keyof FormValues) => `${id}-${name}`;
  const termsId = `${id}-terms`;
  const termsMessage = "Please accept the terms to create your account.";

  const form = useMockForm<FormValues>({
    initialValues: { name: "", email: "", password: "" },
    validate,
    fieldId,
    beforeSubmit: () => {
      if (accepted) return true;
      document.getElementById(termsId)?.focus();
      return false;
    },
    onSubmit: async (values) => {
      // Mock sign-up: no backend, the account only lives in this browser session.
      await new Promise((resolve) => setTimeout(resolve, 800));
      saveSession(values.email.trim());
      window.setTimeout(() => router.push("/"), 1200);
    },
  });

  const busy = form.status !== "idle";

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Show the terms error together with the field errors instead of one at a time.
    setTermsError(accepted ? undefined : termsMessage);
    void form.handleSubmit(event);
  };

  return (
    <AuthCard
      title={signup.form.title}
      description={signup.form.description}
      footer={{ text: "Already have an account?", linkLabel: "Log in", href: "/login" }}
    >
      <form noValidate onSubmit={onSubmit} className="mt-8 flex flex-col gap-6" aria-describedby={`${id}-status`}>
        <FormField
          id={fieldId("name")}
          label="Full name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={form.values.name}
          onInput={form.update("name")}
          error={form.errors.name}
          disabled={busy}
        />
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
          autoComplete="new-password"
          placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
          value={form.values.password}
          onInput={form.update("password")}
          error={form.errors.password}
          disabled={busy}
          trailing={<PasswordToggle visible={showPassword} onToggle={() => setShowPassword((value) => !value)} />}
        />

        <div>
          <label className="flex items-start gap-3 text-[15px] text-ink">
            <input
              id={termsId}
              type="checkbox"
              name="terms"
              checked={accepted}
              disabled={busy}
              aria-invalid={Boolean(termsError)}
              aria-describedby={termsError ? `${termsId}-error` : undefined}
              onChange={(event) => {
                setAccepted(event.currentTarget.checked);
                if (event.currentTarget.checked) setTermsError(undefined);
              }}
              className="focus-ring mt-0.5 size-[18px] shrink-0 rounded border-line accent-brand"
            />
            <span>
              I agree to the{" "}
              <Link href="/#contact" className="focus-ring rounded-sm font-medium text-brand hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/#contact" className="focus-ring rounded-sm font-medium text-brand hover:underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {termsError ? (
            <p id={`${termsId}-error`} className="mt-2 text-sm text-red-600">
              {termsError}
            </p>
          ) : null}
        </div>

        <Button type="submit" className="mt-2 w-full" disabled={busy}>
          {form.status === "submitting" ? "Creating account…" : form.status === "success" ? "Account created" : signup.form.submitLabel}
        </Button>

        <p id={`${id}-status`} role="status" aria-live="polite" className="text-[15px] text-ink">
          {form.status === "success" ? "Welcome to Luma! Taking you to your first course…" : ""}
        </p>
      </form>
    </AuthCard>
  );
}

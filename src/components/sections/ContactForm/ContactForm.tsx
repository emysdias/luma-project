"use client";

import { useId } from "react";
import { contact } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { useMockForm } from "@/lib/useMockForm";
import { isValidEmail } from "@/lib/validation";

type FormValues = { name: string; email: string; message: string };

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!isValidEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  return errors;
}

export function ContactForm() {
  const id = useId();
  const fieldId = (name: keyof FormValues) => `${id}-${name}`;

  const form = useMockForm<FormValues>({
    initialValues: { name: "", email: "", message: "" },
    validate,
    fieldId,
    onSubmit: async () => {
      // Mock request: no backend is required for this challenge.
      await new Promise((resolve) => setTimeout(resolve, 700));
      form.reset();
    },
  });

  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-10">
      <h3 className="font-display text-2xl leading-tight font-bold tracking-[-0.02em] text-ink">{contact.form.title}</h3>
      <p className="mt-2 text-[15px] text-muted">{contact.form.description}</p>

      <form noValidate onSubmit={form.handleSubmit} className="mt-8 flex flex-col gap-6" aria-describedby={`${id}-status`}>
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
        />
        <FormField
          as="textarea"
          id={fieldId("message")}
          label="Your question"
          name="message"
          rows={4}
          placeholder="Tell us how we can help..."
          value={form.values.message}
          onInput={form.update("message")}
          error={form.errors.message}
        />

        <Button type="submit" className="mt-2 w-full" disabled={form.status === "submitting"}>
          {form.status === "submitting" ? "Sending…" : contact.form.submitLabel}
        </Button>

        <p id={`${id}-status`} role="status" aria-live="polite" className="text-[15px] text-ink">
          {form.status === "success" ? "Thanks! Your message was sent. We’ll reply within 24 hours on business days." : ""}
        </p>
      </form>
    </div>
  );
}

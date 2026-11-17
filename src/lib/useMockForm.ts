"use client";

import { useState, type FormEvent } from "react";

export type FormStatus = "idle" | "submitting" | "success";

type Options<T extends Record<string, string>> = {
  initialValues: T;
  validate: (values: T) => Partial<Record<keyof T, string>>;
  /** Builds the DOM id of a field so focus can move to the first invalid one. */
  fieldId: (name: keyof T) => string;
  /** Extra gate run after field validation passes (e.g. a terms checkbox). Return false to abort. */
  beforeSubmit?: () => boolean;
  /** Runs after validation passes. There is no backend, so callers simulate the request here. */
  onSubmit: (values: T) => Promise<void> | void;
};

/**
 * Small form controller shared by the contact, login and sign-up forms:
 * controlled values, per-field errors, submit status and focus management.
 */
export function useMockForm<T extends Record<string, string>>({
  initialValues,
  validate,
  fieldId,
  beforeSubmit,
  onSubmit,
}: Options<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const update = (name: keyof T) => (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as Array<keyof T>).find((key) => nextErrors[key]);
    if (firstInvalid !== undefined) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }
    if (beforeSubmit && !beforeSubmit()) return;

    setStatus("submitting");
    await onSubmit(values);
    setStatus("success");
  };

  const reset = () => setValues(initialValues);

  return { values, errors, status, update, handleSubmit, reset };
}

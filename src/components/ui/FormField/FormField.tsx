import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { omit } from "@/lib/omit";

const inputClass =
  "focus-ring w-full rounded-lg border border-line bg-cream px-5 text-[15px] text-ink placeholder:text-muted-2/80 motion-safe:transition-colors hover:border-ink/25 aria-[invalid=true]:border-red-500";

type BaseProps = {
  id: string;
  label: string;
  error?: string;
  /** Optional element rendered on the right of the label (e.g. a "Forgot password?" link). */
  labelAside?: ReactNode;
  /** Optional element rendered inside the field, aligned right (e.g. a show/hide toggle). */
  trailing?: ReactNode;
};

type InputFieldProps = BaseProps & {
  as?: "input";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "className" | "aria-invalid" | "aria-describedby">;

type TextareaFieldProps = BaseProps & {
  as: "textarea";
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "className" | "aria-invalid" | "aria-describedby">;

export type FormFieldProps = InputFieldProps | TextareaFieldProps;

/** Labelled input/textarea with an inline error message wired through aria attributes. */
export function FormField(props: FormFieldProps) {
  const { id, label, error, labelAside, trailing } = props;
  const errorId = `${id}-error`;
  const a11y = { "aria-invalid": Boolean(error), "aria-describedby": error ? errorId : undefined };

  return (
    <div>
      <div className="mb-2.5 flex items-center justify-between gap-4">
        <label htmlFor={id} className="block text-[15px] font-semibold text-ink">
          {label}
        </label>
        {labelAside}
      </div>

      {props.as === "textarea" ? (
        <textarea
          id={id}
          {...a11y}
          {...omitOwn(props)}
          className={cn(inputClass, "min-h-[120px] resize-y py-3.5")}
        />
      ) : (
        <div className="relative">
          <input id={id} {...a11y} {...omitOwn(props)} className={cn(inputClass, "h-12", trailing ? "pr-14" : undefined)} />
          {trailing ? <div className="absolute inset-y-0 right-2 flex items-center">{trailing}</div> : null}
        </div>
      )}

      {error ? (
        <p id={errorId} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function omitOwn<T extends FormFieldProps>(props: T) {
  return omit(props, ["id", "label", "error", "labelAside", "trailing", "as"]);
}

import { EyeIcon, EyeOffIcon } from "@/components/ui/Icons";

type PasswordToggleProps = {
  visible: boolean;
  onToggle: () => void;
};

export function PasswordToggle({ visible, onToggle }: PasswordToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={visible}
      aria-label={visible ? "Hide password" : "Show password"}
      className="focus-ring flex size-9 items-center justify-center rounded-md text-muted hover:bg-brand-soft hover:text-ink"
    >
      {visible ? <EyeOffIcon className="size-5" /> : <EyeIcon className="size-5" />}
    </button>
  );
}

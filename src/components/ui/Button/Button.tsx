import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { omit } from "@/lib/omit";

type Variant = "primary" | "secondary" | "accent";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap motion-safe:transition-colors motion-safe:duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover",
  secondary: "border border-line bg-white text-ink hover:border-ink/30 hover:bg-cream",
  accent: "bg-butter text-ink hover:bg-butter-hover",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "lg", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    return (
      <Link href={props.href} onClick={props.onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = omit(props, ["variant", "size", "className", "children", "href"]);
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}

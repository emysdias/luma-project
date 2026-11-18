import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowRightIcon } from "@/components/ui/Icons";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  tone?: "ink" | "light";
  className?: string;
};

/** Inline text link with a trailing arrow that nudges on hover. */
export function TextLink({ href, children, tone = "ink", className }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "focus-ring group inline-flex items-center gap-2 rounded-sm text-[15px] font-semibold",
        tone === "ink" ? "text-ink hover:text-brand" : "text-white hover:text-butter",
        className,
      )}
    >
      {children}
      <ArrowRightIcon className="size-4 motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

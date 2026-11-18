import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "display" | "section" | "title";
  tone?: "ink" | "light";
  id?: string;
  className?: string;
  children: ReactNode;
};

const sizes: Record<NonNullable<HeadingProps["size"]>, string> = {
  hero: "text-[40px] leading-[1.08] tracking-[-0.035em] sm:text-[52px] lg:text-[64px]",
  display: "text-[36px] leading-[1.1] tracking-[-0.035em] sm:text-[44px] lg:text-[56px]",
  section: "text-[32px] leading-[1.12] tracking-[-0.03em] sm:text-[40px] lg:text-[48px]",
  title: "text-[20px] leading-[1.25] tracking-[-0.02em]",
};

export function Heading({ as: Tag = "h2", size = "section", tone = "ink", id, className, children }: HeadingProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-display font-extrabold",
        sizes[size],
        tone === "ink" ? "text-ink" : "text-white",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

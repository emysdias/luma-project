import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";

type LogoProps = {
  tone?: "ink" | "light";
  className?: string;
};

export function Logo({ tone = "ink", className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — back to top`}
      className={cn(
        "focus-ring font-display rounded-sm text-[22px] leading-none font-extrabold tracking-[-0.03em]",
        tone === "ink" ? "text-ink" : "text-white",
        className,
      )}
    >
      {siteConfig.logoText}
    </Link>
  );
}

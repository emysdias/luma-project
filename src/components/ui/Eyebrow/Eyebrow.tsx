import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: "brand" | "light";
  className?: string;
};

export function Eyebrow({ children, tone = "brand", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold tracking-[0.14em] uppercase",
        tone === "brand" ? "text-brand" : "text-white/90",
        className,
      )}
    >
      {children}
    </p>
  );
}

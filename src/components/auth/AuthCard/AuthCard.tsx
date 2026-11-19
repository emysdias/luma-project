import Link from "next/link";
import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer: {
    text: string;
    linkLabel: string;
    href: string;
  };
};

/** White card used by the login and sign-up forms. */
export function AuthCard({ title, description, children, footer }: AuthCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-10">
      <h2 className="font-display text-2xl leading-tight font-bold tracking-[-0.02em] text-ink">{title}</h2>
      <p className="mt-2 text-[15px] text-muted">{description}</p>

      {children}

      <p className="mt-6 border-t border-line pt-6 text-center text-[15px] text-muted">
        {footer.text}{" "}
        <Link href={footer.href} className="focus-ring rounded-sm font-semibold text-brand hover:underline">
          {footer.linkLabel}
        </Link>
      </p>
    </div>
  );
}

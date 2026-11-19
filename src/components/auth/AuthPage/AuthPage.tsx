import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { CheckIcon } from "@/components/ui/Icons";

export type AuthBenefit = {
  title: string;
  description: string;
};

type AuthPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: AuthBenefit[];
  children: ReactNode;
};

/** Shared shell for the login and sign-up pages: text column + form card. */
export function AuthPage({ eyebrow, title, description, benefits, children }: AuthPageProps) {
  return (
    <>
      <a
        href="#main"
        className="focus-ring sr-only z-50 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1 bg-cream">
        <section aria-labelledby="auth-title">
          <Container className="grid items-center gap-14 py-16 lg:grid-cols-[minmax(0,1fr)_540px] lg:gap-20 lg:py-[100px]">
            <div className="max-w-[560px] motion-safe:animate-fade-up">
              <Eyebrow>{eyebrow}</Eyebrow>
              <Heading as="h1" id="auth-title" className="mt-4">
                {title}
              </Heading>
              <p className="mt-5 text-lg leading-[1.6] text-muted">{description}</p>

              <ul className="mt-10 flex flex-col gap-5">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-4">
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand"
                      aria-hidden="true"
                    >
                      <CheckIcon className="size-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{benefit.title}</p>
                      <p className="mt-0.5 text-[15px] text-muted">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">{children}</div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

const linkClass =
  "focus-ring rounded-sm text-[15px] text-muted motion-safe:transition-colors hover:text-ink";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (mediaQuery.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    mediaQuery.addEventListener("change", onResize);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      mediaQuery.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
      <Container className="flex h-[68px] items-center gap-6">
        <Logo />

        <nav aria-label="Primary" className="mx-auto hidden lg:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto hidden items-center gap-8 lg:flex">
          <Link href="/login" className={cn(linkClass, "text-ink")}>
            Log in
          </Link>
          <Button href="/signup" size="md">
            Start learning
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring ml-auto inline-flex size-11 items-center justify-center rounded-lg text-ink hover:bg-brand-soft lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-68px)] overflow-y-auto border-t border-line bg-cream lg:hidden"
      >
        <nav aria-label="Mobile" className="px-5 py-6 sm:px-8">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="focus-ring block rounded-lg px-3 py-3 text-lg font-medium text-ink hover:bg-brand-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
            <Button href="/login" variant="secondary" onClick={close}>
              Log in
            </Button>
            <Button href="/signup" onClick={close}>
              Start learning
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

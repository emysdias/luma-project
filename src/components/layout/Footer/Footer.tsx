import Link from "next/link";
import { footerColumns, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-footer-text">
      <Container className="pt-16 pb-10 lg:pt-20 lg:pb-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[448px_240px_240px_minmax(0,1fr)] lg:gap-0">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-[240px] text-[15px] leading-relaxed">{siteConfig.tagline}</p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-xs font-semibold tracking-[0.14em] text-white uppercase">{column.heading}</h2>
              <ul className="mt-6 flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="focus-ring rounded-sm text-[15px] motion-safe:transition-colors hover:text-white focus-visible:ring-offset-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-16 border-t border-white/10 pt-8 text-sm text-white/80">{siteConfig.copyright}</p>
      </Container>
    </footer>
  );
}

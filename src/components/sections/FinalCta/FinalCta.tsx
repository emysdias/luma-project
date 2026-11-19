import { finalCta, learnerAvatars } from "@/data/site";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

/** Decorative peach shapes scattered across the banner, as in the design. */
function Decorations() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1280 470"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 size-full text-peach"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="76" cy="68" r="52" />
      <rect x="320" y="44" width="56" height="56" rx="10" transform="rotate(-12 348 72)" />
      <circle cx="894" cy="58" r="16" />
      <rect x="1166" y="-16" width="150" height="150" rx="20" fill="currentColor" stroke="none" transform="rotate(-14 1241 59)" />
      <path d="M140 232a16 16 0 1 1 10 15l-10 6 2-12a16 16 0 0 1-2-9z" fill="currentColor" stroke="none" />
      <path d="M-20 232h14a36 36 0 0 1 0 72h-14z" fill="currentColor" stroke="none" />
      <circle cx="120" cy="440" r="62" fill="currentColor" stroke="none" />
      <path d="M306 388h16a12 12 0 0 1 0 24h-16zm0 24h20a12 12 0 0 1 0 24h-20z" fill="currentColor" stroke="none" transform="rotate(-18 316 412)" />
      <g transform="translate(1044 116)">
        <path d="M-8 0a8 8 0 1 1 16 0c0 5-4 7-4 12h-8c0-5-4-7-4-12z" />
        <path d="M0-18v-6M14-11l5-5M-14-11l-5-5M-20 0h-6M26 0h-6" />
      </g>
      <g transform="translate(1160 262)">
        <path d="M0-32 28-16v32L0 32l-28-16v-32z" />
        <path d="M-28-16 0 0l28-16M0 0v32" />
        <path d="M-28 16 0 0l28 16" strokeOpacity="0.6" />
      </g>
      <g transform="translate(988 404)">
        <rect x="-22" y="-16" width="20" height="32" rx="3" />
        <rect x="2" y="-16" width="20" height="32" rx="3" />
        <path d="M-12-7v14M12-7v14" />
      </g>
    </svg>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-sand">
      <Decorations />
      <Container className="relative flex flex-col items-center py-20 text-center lg:py-[100px]">
        <AvatarStack avatars={learnerAvatars} size={40} ring="butter" />
        <Heading id="cta-title" size="display" className="mt-9">
          {finalCta.title}
        </Heading>
        <p className="mt-4 text-lg text-muted">{finalCta.description}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Button>
          <Button href={finalCta.secondaryCta.href} variant="secondary">
            {finalCta.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

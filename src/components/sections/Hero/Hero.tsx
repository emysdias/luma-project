import Image from "next/image";
import { hero, learnerAvatars } from "@/data/site";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { StarIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-x-clip bg-cream">
      <Container className="grid items-center gap-14 py-16 lg:grid-cols-[minmax(0,1fr)_492px] lg:gap-10 lg:py-[100px]">
        <div className="motion-safe:animate-fade-up max-w-[600px]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" size="hero" className="mt-6">
            {hero.title}
          </Heading>
          <p className="mt-6 max-w-[480px] text-lg leading-[1.6] text-muted">{hero.description}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <AvatarStack avatars={learnerAvatars.slice(0, 3)} />
            <p className="text-[15px] text-muted">
              <strong className="font-bold text-ink">{hero.trust.highlight}</strong> {hero.trust.rest}
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[492px] motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">
          <div
            aria-hidden="true"
            className="absolute top-6 -right-6 bottom-7 w-[62%] rounded-3xl bg-peach sm:-right-11"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-7 -left-11 size-28 rounded-full bg-[#e2e8ff]"
          />

          <div className="relative aspect-[492/520] overflow-hidden rounded-2xl">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 640px) 492px, 100vw"
              className="object-cover"
            />
          </div>

          <p className="absolute top-4 -left-3 flex items-center gap-3 rounded-xl bg-white py-2 pr-4 pl-2 text-[15px] text-ink shadow-float sm:-left-6">
            <span className="rounded-lg bg-brand-soft px-2.5 py-1.5 text-[15px] font-bold text-brand">
              {hero.floatingBadge.value}
            </span>
            {hero.floatingBadge.label}
          </p>

          <p className="absolute -right-3 bottom-9 flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-[15px] text-ink shadow-float sm:-right-16">
            <span className="flex gap-1 text-[#f5c542]" aria-hidden="true">
              {Array.from({ length: hero.rating.stars }, (_, index) => (
                <StarIcon key={index} className="size-3" />
              ))}
            </span>
            <span className="sr-only">Rated {hero.rating.stars} out of 5 stars: </span>
            {hero.rating.value}
          </p>
        </div>
      </Container>
    </section>
  );
}

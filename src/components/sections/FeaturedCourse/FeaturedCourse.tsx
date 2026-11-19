import Image from "next/image";
import { featuredCourse } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";

export function FeaturedCourse() {
  const { image, instructor } = featuredCourse;

  return (
    <section id="featured" aria-labelledby="featured-title" className="scroll-mt-20 bg-brand text-white">
      <Container className="grid items-center gap-12 py-20 lg:grid-cols-[537px_minmax(0,1fr)] lg:gap-[60px] lg:py-[120px]">
        <figure className="relative">
          <div className="relative aspect-[537/402] overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 537px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="absolute -top-3.5 -left-3 rounded-md bg-butter px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] text-ink uppercase">
            {featuredCourse.badge}
          </figcaption>
        </figure>

        <div>
          <Eyebrow tone="light">{featuredCourse.eyebrow}</Eyebrow>
          <Heading id="featured-title" tone="light" className="mt-5">
            {featuredCourse.title}
          </Heading>
          <p className="mt-6 max-w-[530px] text-[17px] leading-[1.65] text-white/90">{featuredCourse.description}</p>
          <p className="mt-8 text-[17px] text-white">
            with {instructor.name} · {instructor.role}
          </p>

          <ul className="mt-6 flex flex-wrap gap-4" aria-label="Course details">
            {featuredCourse.meta.map((item) => (
              <li
                key={item.label}
                className="rounded-lg border border-white/60 px-4 py-2 text-[15px] leading-tight text-white"
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Button href="/login" variant="accent" className="px-9">
              View course
            </Button>
            <TextLink href="/#courses" tone="light">
              Browse all courses
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

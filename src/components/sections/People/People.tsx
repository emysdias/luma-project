import Image from "next/image";
import { collagePhotos, people } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

export function People() {
  return (
    <section id="people" aria-labelledby="people-title" className="scroll-mt-20 overflow-x-clip bg-cream">
      <Container className="grid items-center gap-16 py-20 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-[60px] lg:py-[112px]">
        <div className="max-w-[540px]">
          <Eyebrow>{people.eyebrow}</Eyebrow>
          <Heading id="people-title" className="mt-4">
            {people.title}
          </Heading>
          <p className="mt-6 text-lg leading-[1.6] text-muted">{people.description}</p>
          <Button href={people.cta.href} variant="secondary" className="mt-10">
            {people.cta.label}
          </Button>
        </div>

        <ul
          aria-label="Students and teachers from around the world"
          className="relative mx-auto aspect-[1040/992] w-full max-w-[520px]"
        >
          <li
            aria-hidden="true"
            className="absolute -top-[2%] left-[3%] aspect-square w-[113%] rounded-full bg-[#e2e8ff]"
          />
          {collagePhotos.map((photo) => (
            <li
              key={photo.src}
              className="absolute overflow-hidden rounded-lg shadow-card ring-2 ring-white"
              style={{
                left: `${photo.left}%`,
                top: `${photo.top}%`,
                width: `${photo.width}%`,
                height: `${photo.height}%`,
              }}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 640px) 140px, 25vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

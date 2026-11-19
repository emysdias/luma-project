import Image from "next/image";
import { stats, testimonial } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { QuoteIcon } from "@/components/ui/Icons";

export function Testimonial() {
  const { quote, author } = testimonial;

  return (
    <section aria-labelledby="testimonial-title" className="bg-white">
      <h2 id="testimonial-title" className="sr-only">
        What learners say about Luma
      </h2>
      <Container className="grid gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_384px] lg:gap-0 lg:py-[108px]">
        <figure className="max-w-[620px]">
          <QuoteIcon className="h-6 w-8 text-brand" />
          <blockquote className="font-display mt-6 text-[26px] leading-[1.35] font-semibold tracking-[-0.02em] text-ink sm:text-[32px]">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4">
            <Image
              src={author.avatar.src}
              alt={author.avatar.alt}
              width={96}
              height={96}
              sizes="48px"
              className="size-12 rounded-full object-cover"
            />
            <div>
              <p className="text-base font-bold text-ink">{author.name}</p>
              <p className="mt-0.5 text-[15px] text-muted">{author.role}</p>
            </div>
          </figcaption>
        </figure>

        <dl className="flex flex-col gap-8 border-t border-line pt-10 lg:gap-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="order-2 mt-1 text-[15px] text-muted">{stat.label}</dt>
              <dd className="font-display text-[48px] leading-none font-extrabold tracking-[-0.04em] text-brand sm:text-[56px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

import { skillCategories } from "@/data/site";
import type { SkillCategory } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { TextLink } from "@/components/ui/TextLink";

type CategoryCardProps = {
  category: SkillCategory;
};

function CategoryCard({ category }: CategoryCardProps) {
  const titleId = `category-${category.id}`;
  return (
    <li className="flex min-h-[264px] flex-col rounded-2xl border border-line bg-white p-7 motion-safe:transition-shadow hover:shadow-card">
      <span className="self-start rounded-md bg-brand-soft px-2.5 py-1.5 text-xs font-semibold tracking-[0.1em] text-brand">
        {category.index}
      </span>
      <h3 id={titleId} className="font-display mt-8 text-[20px] leading-tight font-bold tracking-[-0.02em] text-ink">
        {category.title}
      </h3>
      <p className="mt-3 text-sm leading-[1.7] text-muted-2">{category.description}</p>
      <TextLink href={category.href} className="mt-auto pt-6">
        Explore
        <span className="sr-only"> {category.title}</span>
      </TextLink>
    </li>
  );
}

export function SkillCategories() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="scroll-mt-20 bg-white">
      <Container className="py-20 lg:pt-[104px] lg:pb-[100px]">
        <Eyebrow>Find your next skill</Eyebrow>
        <Heading id="courses-title" className="mt-5 max-w-[640px]">
          Learn something worth knowing.
        </Heading>
        <p className="mt-5 max-w-[540px] text-lg leading-[1.6] text-muted">
          Short, practical courses designed around skills you can put to work immediately.
        </p>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

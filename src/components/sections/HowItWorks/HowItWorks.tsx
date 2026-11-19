import { steps } from "@/data/site";
import type { Step, StepIcon } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";

function StepGlyph({ icon }: { icon: StepIcon }) {
  if (icon === "focus") {
    return (
      <span className="flex size-14 items-center justify-center rounded-full bg-brand-soft">
        <span className="size-6 rounded-md bg-brand" />
      </span>
    );
  }
  if (icon === "experience") {
    return (
      <span className="flex size-14 rotate-[8deg] items-end justify-end rounded-xl bg-peach p-2">
        <span className="size-7 rounded-full bg-[#ff7a4d]" />
      </span>
    );
  }
  return (
    <span className="flex size-14 items-end justify-start rounded-xl bg-[#fff0b8] p-2.5">
      <span className="size-6 rounded-full bg-[#d8c75a]" />
    </span>
  );
}

function StepItem({ step }: { step: Step }) {
  return (
    <li className="relative pl-20 lg:pl-0">
      <div aria-hidden="true" className="absolute top-0 left-0 lg:relative">
        <StepGlyph icon={step.icon} />
      </div>
      <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-muted-2 uppercase lg:mt-8">{step.label}</p>
      <h3 className="font-display mt-3 text-[22px] leading-tight font-bold tracking-[-0.02em] text-ink">{step.title}</h3>
      <p className="mt-3 max-w-[340px] text-base leading-[1.65] text-muted">{step.description}</p>
    </li>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="scroll-mt-20 bg-cream">
      <Container className="py-20 lg:py-[108px]">
        <div className="text-center">
          <Eyebrow>How Luma works</Eyebrow>
          <Heading id="how-title" className="mx-auto mt-5">
            Less browsing. More learning.
          </Heading>
        </div>

        <ol className="relative mt-14 flex flex-col gap-12 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-0">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-7 w-px bg-line lg:top-7 lg:right-[calc(33.333%-56px)] lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
          />
          {steps.map((step) => (
            <StepItem key={step.id} step={step} />
          ))}
        </ol>
      </Container>
    </section>
  );
}

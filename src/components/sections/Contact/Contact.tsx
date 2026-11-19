import { contact, contactChannels } from "@/data/site";
import type { ContactChannel } from "@/lib/types";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { ChatIcon, ClockIcon } from "@/components/ui/Icons";
import { ContactForm } from "@/components/sections/ContactForm";

function ChannelCard({ channel }: { channel: ContactChannel }) {
  const Icon = channel.icon === "chat" ? ChatIcon : ClockIcon;
  return (
    <li className="flex items-center gap-5 rounded-xl bg-cream p-6">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand" aria-hidden="true">
        <Icon className="size-6" />
      </span>
      <div>
        <p className="text-[15px] text-ink">{channel.label}</p>
        {channel.href ? (
          <a
            href={channel.href}
            className="focus-ring mt-1 inline-block rounded-sm text-[15px] text-brand hover:underline"
          >
            {channel.value}
          </a>
        ) : (
          <p className="mt-1 text-[15px] text-muted">{channel.value}</p>
        )}
      </div>
    </li>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 bg-white">
      <Container className="grid items-center gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_540px] lg:gap-20 lg:py-[100px]">
        <div>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <Heading id="contact-title" className="mt-4">
            {contact.title}
          </Heading>
          <p className="mt-5 max-w-[600px] text-lg leading-[1.6] text-muted">{contact.description}</p>

          <ul className="mt-12 flex max-w-[480px] flex-col gap-4">
            {contactChannels.map((channel) => (
              <ChannelCard key={channel.label} channel={channel} />
            ))}
          </ul>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}

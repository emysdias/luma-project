import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SkillCategories } from "@/components/sections/SkillCategories";
import { FeaturedCourse } from "@/components/sections/FeaturedCourse";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonial } from "@/components/sections/Testimonial";
import { People } from "@/components/sections/People";
import { Contact } from "@/components/sections/Contact";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="focus-ring sr-only z-50 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <SkillCategories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <People />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

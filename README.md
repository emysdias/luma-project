# Luma - Buzzvel Front-End Challenge (November 2026)

A single responsive landing page built from the supplied Figma design using **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

Requirements: Node 20+ and pnpm (npm/yarn also work).

```bash
pnpm install     # install dependencies
pnpm dev         # http://localhost:3000
pnpm build       # production build
pnpm start       # serve the production build
pnpm lint        # eslint
pnpm test        # unit/component tests (Vitest), single run
pnpm test:watch  # tests in watch mode
pnpm storybook   # component explorer at http://localhost:6006
pnpm build-storybook  # static Storybook build in storybook-static/
```

## Docker (dev with hot reload)

```bash
docker compose up --build      # http://localhost:3000
PORT=3100 docker compose up    # use another host port if 3000 is taken
docker compose down            # stop
```

The source is bind-mounted into the container, so saving a file on the host triggers Fast Refresh. `node_modules` and `.next` live in named volumes (the host ones are built for another OS). After changing dependencies, rebuild and recreate the volume: `docker compose down -v && docker compose up --build`.

On macOS/Windows with Docker Desktop, file events can be slow or missed; Next.js recommends running `pnpm dev` on the host there (see the "local development" guide).

## Tests and Storybook

- **Tests** use Vitest, jsdom and Testing Library. Files live next to the code as `*.test.ts(x)` (validation helpers, `Button`, `LoginForm`); setup is in `src/test/setup.ts`.
- **Storybook** (`@storybook/nextjs-vite`) documents every component (UI, Auth, Layout and the page Sections). Stories live next to the components as `*.stories.tsx`, and the forms and `PasswordToggle` include interaction tests in `play` functions. Tailwind is wired in `.storybook/main.ts` through `@tailwindcss/vite`, since the app itself compiles it with Turbopack.

## Project structure

```
src/
  app/            layout (fonts + metadata), home page, /login and /signup pages, global styles, favicon
  components/     one folder per component: Name/Name.tsx, Name.stories.tsx, Name.test.tsx (optional)
                  and an index.ts, so imports stay `@/components/<group>/Name`
    auth/         AuthPage shell, AuthCard, LoginForm, SignupForm, PasswordToggle
    layout/       Header (sticky, mobile menu), Footer
    sections/     Hero, SkillCategories, FeaturedCourse, HowItWorks,
                  Testimonial (+ stats), People, Contact (+ ContactForm), FinalCta
    ui/           Button, Heading, Eyebrow, Container, FormField, TextLink, AvatarStack, Logo, Icons
  data/site.ts    all copy and mock data (typed)
  lib/            shared types, validation, mock session and the useMockForm hook
public/images     photos used on the page
```

Every component receives typed props; page content lives in `src/data/site.ts` so sections stay presentational.

## Key decisions

- **Design tokens.** Colours, fonts, shadows and the fade-up keyframe are declared once in `globals.css` with Tailwind's `@theme`, so utilities such as `bg-brand`, `text-muted` or `font-display` map straight to the design.
- **Typography.** Headings use Plus Jakarta Sans (closest Google Font to the geometric face in the design) and body text uses Inter, both self-hosted through `next/font` with `display: swap` and only the weights that are used.
- **Layout measurements** were taken from the 2× design export: 1120px container, 68px header, 264px category cards, 492×520 hero image, 537×402 featured image, 520px people collage. Section paddings follow the design (100–120px on desktop, 80px on mobile).
- **Images.** The people collage, avatars and the testimonial portrait were cropped from the design export so the page matches the mockup exactly. The hero and featured photos in the design have UI badges overlapping them, so clean substitutes with the same framing were taken from Unsplash (free licence). All photos are served through `next/image` with explicit `sizes`, and the hero image is marked `priority`.
- **Responsiveness.** Desktop (≥1024px) follows the design; tablet and mobile stack the two-column sections, the category grid becomes 2 → 1 columns, the steps turn into a vertical timeline, and the people collage keeps its layout by positioning tiles with percentages inside an aspect-ratio box. The mobile design was not supplied, so these breakpoints are my interpretation.
- **Interactions.** Sticky header with an accessible mobile menu (`aria-expanded`, `aria-controls`, Escape to close, scroll lock); smooth in-page navigation with `scroll-padding-top`; hover/focus states on all controls; a contact form with client-side validation, inline error messages wired through `aria-describedby`/`aria-invalid`, focus moved to the first invalid field and a polite live region for the success state. Submission is mocked (no backend required).
- **Accessibility.** Semantic landmarks and heading order, skip link, descriptive `alt` text, decorative graphics hidden with `aria-hidden`, visible focus rings, and `<dl>` for the stats.
- **Motion.** The only animation is a subtle fade-up on the hero plus colour/transform transitions. All of them are gated with `motion-safe:` and smooth scrolling is only enabled under `prefers-reduced-motion: no-preference`.
- **Small fixes to the design.** The three steps are all labelled "STEP 01" in the mockup; I used 01/02/03. Nav links point to the relevant sections of the page since there are no other routes.
- **Login and sign-up pages (`/login`, `/signup`).** Built in the same visual language as the contact section through a shared `AuthPage` shell: a text column with benefits and a card with the form. Login asks for email and password (show/hide toggle with `aria-pressed`), sign-up adds name and a terms checkbox. Validation runs on the client through a small `useMockForm` hook that is also used by the contact form; a successful submit stores a mock session in `sessionStorage` and redirects to the home page. There is no backend, so any valid email and a password of 8+ characters work. "Log in" links to `/login`; "Start learning", "Join Luma" and "Create an account" link to `/signup`.
- **Scroll on navigation.** The page uses `scroll-behavior: smooth` for anchor links, so `<html>` carries `data-scroll-behavior="smooth"`; Next.js 16 needs that attribute to temporarily disable smooth scrolling during route changes, otherwise the new page can open mid-scroll.
- **Metadata.** Title, description, Open Graph/Twitter tags, theme colour and an SVG favicon are set in `app/layout.tsx` and `app/icon.svg`.

## Verification

- `pnpm lint`, TypeScript and `pnpm build` all pass with no warnings.
- Checked the production build in Chrome at 390px, 820px and 1280px, including the open mobile menu, the contact form's error and success states, the login and sign-up flows (validation errors, password toggle, success + redirect) and navigation from the bottom of the home page to `/login` landing at the top.

## Known gaps

- Fonts are close to, but not identical to, the design's typeface, so a few line breaks differ by a word.
- The decorative shapes in the final call-to-action banner are approximations drawn in SVG.
- Every component has a story, but automated tests are deliberately few: only the shared helpers, `Button` and the login flow. The sign-up and contact forms and the page sections have no unit tests yet.

## Time spent

Approximately 6 hours, including measuring the design, extracting assets, building the sections and verifying the build.

## AI tools

Claude Code (Anthropic) was used as a pair programmer: it helped measure the design export, scaffold components and write the first pass of each section. Every file was reviewed by me; the result was checked with lint, type-checking, a production build and screenshots of the running page at desktop, tablet and mobile widths.

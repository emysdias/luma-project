import type {
  Avatar,
  CollagePhoto,
  ContactChannel,
  FeaturedCourseData,
  FooterColumn,
  NavLink,
  SkillCategory,
  Stat,
  Step,
  TestimonialData,
} from "@/lib/types";

export const siteConfig = {
  name: "Luma",
  logoText: "luma.",
  tagline: "Practical learning for curious people.",
  copyright: "© 2026 Luma Learning",
  contactEmail: "contact@luma.com",
};

export const navLinks: NavLink[] = [
  { label: "Courses", href: "/#courses" },
  { label: "For Teams", href: "/#featured" },
  { label: "Community", href: "/#people" },
  { label: "About", href: "/#how-it-works" },
];

export const learnerAvatars: Avatar[] = [
  { src: "/images/avatar-1.jpg", alt: "Learner portrait" },
  { src: "/images/avatar-2.jpg", alt: "Learner portrait" },
  { src: "/images/avatar-3.jpg", alt: "Learner portrait" },
  { src: "/images/avatar-4.jpg", alt: "Learner portrait" },
];

export const hero = {
  eyebrow: "Learn at your own pace",
  title: "Build skills that actually move you forward.",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  primaryCta: { label: "Explore courses", href: "/#courses" },
  secondaryCta: { label: "See how it works", href: "/#how-it-works" },
  trust: { highlight: "Trusted by 24,000+", rest: "learners" },
  floatingBadge: { value: "120+", label: "expert-led courses" },
  rating: { value: "4.9 avg rating", stars: 5 },
  image: {
    src: "/images/hero.jpg",
    alt: "A smiling instructor sitting by a window with a laptop on her lap.",
    width: 984,
    height: 1040,
  },
};

export const skillCategories: SkillCategory[] = [
  {
    id: "product-design",
    index: "01",
    title: "Product Design",
    description: "Turn complex problems into clear, useful experiences.",
    href: "/#featured",
  },
  {
    id: "technology",
    index: "02",
    title: "Technology",
    description: "Build a stronger understanding of the tools shaping digital products.",
    href: "/#featured",
  },
  {
    id: "business",
    index: "03",
    title: "Business",
    description: "Develop practical skills for better decisions and stronger teams.",
    href: "/#featured",
  },
  {
    id: "creative",
    index: "04",
    title: "Creative",
    description: "Explore new ways to communicate, create and tell stories.",
    href: "/#featured",
  },
];

export const featuredCourse: FeaturedCourseData = {
  eyebrow: "Most popular this month",
  badge: "Featured course",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: { name: "Maya Chen", role: "Senior Product Designer" },
  meta: [{ label: "8 lessons" }, { label: "2h 40min" }, { label: "Intermediate" }],
  image: {
    src: "/images/featured.jpg",
    alt: "A designer sketching interface wireframes on paper with a pencil.",
    width: 1074,
    height: 804,
  },
};

export const steps: Step[] = [
  {
    id: "focus",
    label: "Step 01",
    title: "Choose your focus",
    description: "Find courses based on the skill you want to build, not endless content categories.",
    icon: "focus",
  },
  {
    id: "experience",
    label: "Step 02",
    title: "Learn from experience",
    description: "Follow concise lessons created by professionals who use these skills.",
    icon: "experience",
  },
  {
    id: "practice",
    label: "Step 03",
    title: "Put it into practice",
    description: "Every course includes practical exercises designed to turn knowledge into action.",
    icon: "practice",
  },
];

export const testimonial: TestimonialData = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  author: {
    name: "Alex Morgan",
    role: "Product Manager",
    avatar: { src: "/images/avatar-alex.jpg", alt: "Portrait of Alex Morgan" },
  },
};

export const stats: Stat[] = [
  { value: "24K+", label: "active learners" },
  { value: "120+", label: "expert-led courses" },
  { value: "92%", label: "complete their first course" },
];

export const people = {
  eyebrow: "The people",
  title: "Meet international students & teachers",
  description:
    "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
  cta: { label: "Explore teachers and students", href: "/#contact" },
};

/** Positions measured from the design, as percentages of a 1040×992 box. */
export const collagePhotos: CollagePhoto[] = [
  { src: "/images/people-5.jpg", alt: "Three students gathered around a laptop", left: 0.5, top: 49.6, width: 26, height: 41.6 },
  { src: "/images/people-1.jpg", alt: "A student raising her hand at a desk", left: 7.2, top: 16.8, width: 19.2, height: 29.7 },
  { src: "/images/people-2.jpg", alt: "A student in a hoodie reading a book", left: 30.3, top: 0.5, width: 18.7, height: 33.5 },
  { src: "/images/people-6.jpg", alt: "Two students singing by a window", left: 30.3, top: 37.8, width: 18.7, height: 33.5 },
  { src: "/images/people-9.jpg", alt: "A student reading at a table with a tablet", left: 30.3, top: 75.1, width: 18.7, height: 24.4 },
  { src: "/images/people-3.jpg", alt: "A graduate in cap and gown holding a diploma", left: 53.4, top: 2.2, width: 18.5, height: 26.5 },
  { src: "/images/people-7.jpg", alt: "A student working on a laptop at a desk", left: 53.4, top: 32.3, width: 18.5, height: 26.7 },
  { src: "/images/people-10.jpg", alt: "A teacher on a video call on a desktop monitor", left: 53.4, top: 63, width: 18.5, height: 29.4 },
  { src: "/images/people-4.jpg", alt: "A student in a yellow shirt holding notebooks", left: 76.2, top: 12.3, width: 23.4, height: 40.3 },
  { src: "/images/people-8.jpg", alt: "A student wearing a hijab holding a coffee", left: 76.2, top: 56.7, width: 18.8, height: 26.7 },
];

export const contact = {
  eyebrow: "Contact",
  title: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
  form: {
    title: "Contact us",
    description: "Fill out the fields and we will get in touch.",
    submitLabel: "Send message",
  },
};

export const contactChannels: ContactChannel[] = [
  { icon: "chat", label: "Email", value: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}` },
  { icon: "clock", label: "Response Time", value: "Up to 24 hours on business days" },
];

export const finalCta = {
  title: "What will you learn next?",
  description: "Start with one course. Build from there.",
  primaryCta: { label: "Explore all courses", href: "/#courses" },
  secondaryCta: { label: "Join Luma", href: "/signup" },
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Explore",
    links: [
      { label: "Courses", href: "/#courses" },
      { label: "Categories", href: "/#courses" },
      { label: "Instructors", href: "/#people" },
      { label: "For Teams", href: "/#featured" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#how-it-works" },
      { label: "Careers", href: "/#contact" },
      { label: "Journal", href: "/#featured" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Center", href: "/#contact" },
      { label: "Contact", href: "/#contact" },
      { label: "Terms", href: "/#contact" },
      { label: "Privacy", href: "/#contact" },
    ],
  },
];

export const login = {
  eyebrow: "Welcome back",
  title: "Pick up where you left off.",
  description:
    "Log in to continue your courses, track your progress and keep every lesson you have saved in one place.",
  benefits: [
    { title: "Your progress, saved", description: "Every lesson you finish is tracked across devices." },
    { title: "Short, focused lessons", description: "Learn in the time you have, one lesson at a time." },
    { title: "Expert-led content", description: "Courses created by people who use these skills daily." },
  ],
  form: {
    title: "Log in",
    description: "Use any email and a password with at least 8 characters — this is a demo without a backend.",
    submitLabel: "Log in",
  },
};

export const signup = {
  eyebrow: "Join Luma",
  title: "Start with one course. Build from there.",
  description:
    "Create a free account to save your progress, follow expert-led lessons and put every skill into practice.",
  benefits: [
    { title: "Free to join", description: "Explore the catalogue and preview any course before you commit." },
    { title: "Learn at your own pace", description: "Lessons are short enough to fit into a busy week." },
    { title: "Practical exercises", description: "Every course ends with work you can show, not just watch." },
  ],
  form: {
    title: "Create your account",
    description: "Use any email and a password with at least 8 characters — this is a demo without a backend.",
    submitLabel: "Create account",
  },
};

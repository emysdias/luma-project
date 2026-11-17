export type NavLink = {
  label: string;
  href: string;
};

export type Avatar = {
  src: string;
  alt: string;
};

export type SkillCategory = {
  id: string;
  index: string;
  title: string;
  description: string;
  href: string;
};

export type CourseMeta = {
  label: string;
};

export type FeaturedCourseData = {
  eyebrow: string;
  badge: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    role: string;
  };
  meta: CourseMeta[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type StepIcon = "focus" | "experience" | "practice";

export type Step = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: StepIcon;
};

export type TestimonialData = {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: Avatar;
  };
};

export type Stat = {
  value: string;
  label: string;
};

export type CollagePhoto = {
  src: string;
  alt: string;
  /** Position and size in percentages of the collage box. */
  left: number;
  top: number;
  width: number;
  height: number;
};

export type ContactChannel = {
  icon: "chat" | "clock";
  label: string;
  value: string;
  href?: string;
};

export type FooterColumn = {
  heading: string;
  links: NavLink[];
};

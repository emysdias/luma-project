import type { StorybookConfig } from "@storybook/nextjs-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["../public"],
  // The app compiles Tailwind through Turbopack; Storybook runs on Vite, so add the Vite plugin here.
  viteFinal: (viteConfig) => ({ ...viteConfig, plugins: [...(viteConfig.plugins ?? []), tailwindcss()] }),
};

export default config;

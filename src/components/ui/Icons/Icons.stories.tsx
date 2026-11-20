import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as Icons from "./Icons";

const meta = { title: "UI/Icons" } satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const All: Story = {
  render: () => (
    <ul className="grid grid-cols-5 gap-6 text-ink">
      {Object.entries(Icons).map(([name, Icon]) => (
        <li key={name} className="flex flex-col items-center gap-2 text-xs text-muted">
          <Icon className="size-8 text-ink" />
          {name}
        </li>
      ))}
    </ul>
  ),
};

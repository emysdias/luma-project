import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { learnerAvatars } from "@/data/site";
import { AvatarStack } from "./AvatarStack";

const meta = {
  title: "UI/AvatarStack",
  component: AvatarStack,
  args: { avatars: learnerAvatars.slice(0, 3) },
  argTypes: { ring: { control: "inline-radio", options: ["cream", "butter"] } },
} satisfies Meta<typeof AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Large: Story = { args: { size: 48 } };
export const ButterRing: Story = {
  args: { ring: "butter" },
  decorators: [(Story) => <div className="bg-butter p-6"><Story /></div>],
};

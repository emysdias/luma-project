import Image from "next/image";
import type { Avatar } from "@/lib/types";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: Avatar[];
  size?: number;
  ring?: "cream" | "butter";
  className?: string;
};

const rings = {
  cream: "ring-cream",
  butter: "ring-[#ffe76b]",
};

/** Overlapping circular avatars. Purely decorative in context, so hidden from AT. */
export function AvatarStack({ avatars, size = 32, ring = "cream", className }: AvatarStackProps) {
  return (
    <ul className={cn("flex", className)} aria-hidden="true">
      {avatars.map((avatar, index) => (
        <li
          key={`${avatar.src}-${index}`}
          className={cn("relative rounded-full ring-[3px]", rings[ring], index > 0 && "-ml-1")}
          style={{ width: size, height: size, zIndex: index }}
        >
          <Image
            src={avatar.src}
            alt=""
            width={size * 2}
            height={size * 2}
            sizes={`${size}px`}
            className="size-full rounded-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}

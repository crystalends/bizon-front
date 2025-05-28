import { Button as HeroUIButton } from "@heroui/button";
import { VariantProps } from "@heroui/theme";
import clsx from "clsx";
import { HTMLAttributes } from "react";

type TButtonProps = VariantProps<typeof HeroUIButton> &
  HTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: TButtonProps) {
  return (
    <HeroUIButton
      color="primary"
      className={clsx("text-xl p-[24px]", className)}
      {...props}
    />
  );
}

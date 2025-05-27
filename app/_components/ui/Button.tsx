import { Button as HeroUIButton } from "@heroui/button";
import { VariantProps } from "@heroui/theme";
import clsx from "clsx";

type TButtonProps = VariantProps<typeof HeroUIButton> &
  React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: TButtonProps) {
  return (
    <HeroUIButton
      color="primary"
      className={clsx("text-xl p-[24px]", className)}
      {...props}
    />
  );
}

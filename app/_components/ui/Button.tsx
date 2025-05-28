import { ButtonProps, Button as HeroUIButton } from "@heroui/button";
import clsx from "clsx";

type TButtonProps = ButtonProps;

export default function Button({ className, ...props }: TButtonProps) {
  return (
    <HeroUIButton
      color="primary"
      className={clsx("text-xl p-[24px]", className)}
      {...props}
    />
  );
}

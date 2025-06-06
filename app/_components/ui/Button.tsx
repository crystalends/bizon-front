import TPolymorphicProps from "@/app/_types/Polymorphic";
import { ButtonProps, Button as HeroUIButton } from "@heroui/button";
import clsx from "clsx";
import { ElementType } from "react";

export type TButtonProps<T extends ElementType = "button"> = TPolymorphicProps<
  T,
  ButtonProps
>;

export default function Button<T extends ElementType = "button">({
  className,
  ...props
}: TButtonProps<T>) {
  const { isIconOnly } = props;

  return (
    <HeroUIButton
      color="primary"
      className={clsx(
        "text-xl",
        {
          "p-[24px]": !isIconOnly,
          "p-0": isIconOnly,
        },
        className,
      )}
      {...props}
    />
  );
}

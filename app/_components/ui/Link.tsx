import { Link as HeroUILink, LinkProps } from "@heroui/link";
import { ElementType } from "react";
import clsx from "clsx";

import TPolymorphicProps from "@/app/_types/Polymorphic";

export type TLinkProps<T extends ElementType = "a"> = TPolymorphicProps<
  T,
  LinkProps
>;

export default function Link<T extends ElementType = "a">({
  className,
  ...props
}: TLinkProps<T>) {
  return (
    <HeroUILink
      className={clsx("font-medium", className)}
      color="foreground"
      {...props}
    />
  );
}

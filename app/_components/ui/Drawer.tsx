import { DrawerProps, Drawer as HeroUIDrawer } from "@heroui/drawer";
import { ElementType } from "react";
import clsx from "clsx";

import TPolymorphicProps from "@/app/_types/Polymorphic";

export type TDrawerProps<T extends ElementType = "div"> = TPolymorphicProps<
  T,
  DrawerProps
>;

export default function Drawer<T extends ElementType = "div">({
  className,
  ...props
}: TDrawerProps<T>) {
  return (
    <HeroUIDrawer
      className={clsx("rounded-none py-10 bg-gray-50", className)}
      {...props}
    />
  );
}

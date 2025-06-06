import { CardProps, Card as HeroUICard } from "@heroui/card";
import clsx from "clsx";
import { ElementType } from "react";

import TPolymorphicProps from "@/app/_types/Polymorphic";

type TFeatureCardProps<T extends ElementType = "div"> = TPolymorphicProps<
  T,
  Omit<CardProps, "children">
>;

export default function FeatureCard<T extends ElementType = "div">({
  className,
  ...props
}: TFeatureCardProps<T>) {
  return (
    <HeroUICard
      fullWidth
      className={clsx("rounded-2xl bg-gray-50 p-10", className)}
      shadow="none"
      {...props}
    />
  );
}

import TPolymorphicProps from "@/app/_types/Polymorphic";
import { CardProps, Card as HeroUICard } from "@heroui/card";
import clsx from "clsx";
import { ElementType } from "react";

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
      shadow="none"
      className={clsx("rounded-2xl bg-gray-50 p-10", className)}
      {...props}
    />
  );
}

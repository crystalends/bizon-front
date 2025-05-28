import { CardProps, Card as HeroUICard } from "@heroui/card";
import clsx from "clsx";
import { ReactNode } from "react";

export type TAdvantageCardProps = {
  icon?: ReactNode;
} & CardProps;

export default function AdvantageCard({
  className,
  icon,
  ...props
}: TAdvantageCardProps) {
  return (
    <HeroUICard
      fullWidth
      shadow="none"
      className={clsx("", className)}
      {...props}
    />
  );
}

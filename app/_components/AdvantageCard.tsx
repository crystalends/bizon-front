import { CardProps, Card as HeroUICard } from "@heroui/card";
import clsx from "clsx";

type TAdvantageCardProps = CardProps;

export default function AdvantageCard({
  className,
  ...props
}: TAdvantageCardProps) {
  return (
    <HeroUICard
      fullWidth
      shadow="none"
      className={clsx("rounded-2xl bg-gray-50 p-10", className)}
      {...props}
    />
  );
}

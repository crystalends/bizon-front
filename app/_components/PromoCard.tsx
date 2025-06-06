import { CardProps, Card as HeroUICard } from "@heroui/card";
import clsx from "clsx";

type TPromoCardProps = CardProps;

export default function PromoCard({ className, ...props }: TPromoCardProps) {
  return (
    <HeroUICard
      fullWidth
      className={clsx("p-10 xl:p-20 rounded-2xl", className)}
      shadow="none"
      {...props}
    />
  );
}

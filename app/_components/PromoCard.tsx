import { Card as HeroUICard } from "@heroui/card";
import { VariantProps } from "@heroui/theme";
import clsx from "clsx";
import { HTMLAttributes } from "react";

type TPromoCardProps = VariantProps<typeof HeroUICard> &
  HTMLAttributes<HTMLButtonElement>;

export default function PromoCard({ className, ...props }: TPromoCardProps) {
  return (
    <HeroUICard
      fullWidth
      shadow="none"
      className={clsx("p-10 xl:p-20 rounded-2xl", className)}
      {...props}
    />
  );
}

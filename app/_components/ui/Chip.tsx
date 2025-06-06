import { Chip as HeroUIChip, ChipProps } from "@heroui/chip";
import { ElementType } from "react";
import TPolymorphicProps from "@/app/_types/Polymorphic";
import clsx from "clsx";

type TChipProps<T extends ElementType = "div"> = TPolymorphicProps<
  T,
  ChipProps
>;

export default function Chip<T extends ElementType = "div">({
  className,
  classNames = {},
  ...props
}: TChipProps<T>) {
  return (
    <HeroUIChip
      variant="light"
      classNames={{
        content: clsx("font-medium", classNames.content),
        ...classNames,
      }}
      className={clsx("border border-gray-300 rounded-[4px]", className)}
      {...props}
    />
  );
}

import { Chip as HeroUIChip, ChipProps } from "@heroui/chip";
import { ElementType } from "react";
import clsx from "clsx";

import TPolymorphicProps from "@/app/_types/Polymorphic";

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
      className={clsx(
        "border p-1 xl:p-2 h-[28px] xl:h-[35px] border-gray-300 rounded-[4px]",
        className,
      )}
      classNames={{
        content: clsx("font-medium text-xs xl:text-sm", classNames.content),
        ...classNames,
      }}
      variant="light"
      {...props}
    />
  );
}

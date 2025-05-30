import TPolymorphicProps from "@/app/_types/Polymorphic";
import { Chip, ChipProps } from "@heroui/chip";
import clsx from "clsx";
import { ElementType } from "react";

type TCategoryChipProps<T extends ElementType = "div"> = {
  name: string;
  chipProps?: TPolymorphicProps<T, ChipProps>;
};

export default function CategoryChip({
  name,
  chipProps = {},
}: TCategoryChipProps) {
  const { classNames = {}, className, ...restChipProps } = chipProps;

  return (
    <Chip
      classNames={{
        content: clsx("font-medium", classNames.content),
      }}
      className={clsx("border border-gray-300 rounded-[4px]", className)}
      {...restChipProps}
    >
      {name}
    </Chip>
  );
}

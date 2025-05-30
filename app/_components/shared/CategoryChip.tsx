import TPolymorphicProps from "@/app/_types/Polymorphic";
import { Chip as HeroUIChip, ChipProps } from "@heroui/chip";
import clsx from "clsx";
import { ElementType, ReactNode } from "react";

type TChipProps<T extends ElementType = "div"> = {
  name: string;
  renderName?: (name: string) => ReactNode;
  chipProps?: TPolymorphicProps<T, ChipProps>;
};

export default function Chip({
  name,
  renderName = (name) => name,
  chipProps = {},
}: TChipProps) {
  const { classNames = {}, className, ...restChipProps } = chipProps;

  return (
    <HeroUIChip
      classNames={{
        content: clsx("font-medium", classNames.content),
      }}
      className={clsx("border border-gray-300 rounded-[4px]", className)}
      {...restChipProps}
    >
      {renderName(name)}
    </HeroUIChip>
  );
}

import { Input as HeroUIInput, InputProps } from "@heroui/input";
import { ElementType } from "react";
import TPolymorphicProps from "@/app/_types/Polymorphic";
import clsx from "clsx";

export type TInputProps<T extends ElementType = "input"> = TPolymorphicProps<
  T,
  InputProps
>;

export default function Input<T extends ElementType = "input">({
  classNames = {},
  ...props
}: TInputProps<T>) {
  return (
    <HeroUIInput
      classNames={{
        ...classNames,
        input: clsx("text-xl", classNames.input),
        inputWrapper: clsx(
          "!bg-white h-[66px] px-6 py-[21px]",
          classNames.inputWrapper,
        ),
      }}
      {...props}
    />
  );
}

import { Input as HeroUIInput, InputProps } from "@heroui/input";
import { ElementType } from "react";
import clsx from "clsx";

import TPolymorphicProps from "@/app/_types/Polymorphic";

export type TInputProps<T extends ElementType = "input"> = TPolymorphicProps<
  T,
  InputProps
>;

export default function Input<T extends ElementType = "input">({
  classNames = {},
  ...props
}: TInputProps<T>) {
  const { input, inputWrapper, label, ...restClassNames } = classNames;

  return (
    <HeroUIInput
      classNames={{
        input: clsx("text-sm xl:text-base", input),
        inputWrapper: clsx(
          "h-[41px] xl:h-[66px] p-3 xl:px-6 xl:py-[21px]",
          inputWrapper,
        ),
        ...restClassNames,
      }}
      color="primary"
      variant="bordered"
      {...props}
    />
  );
}

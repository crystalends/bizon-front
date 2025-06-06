import { Textarea as HeroUITextarea, TextAreaProps } from "@heroui/input";
import { ElementType } from "react";
import clsx from "clsx";

import TPolymorphicProps from "@/app/_types/Polymorphic";

export type TTextareaProps<T extends ElementType = "input"> = TPolymorphicProps<
  T,
  TextAreaProps
>;

export default function Textarea<T extends ElementType = "input">({
  classNames = {},
  ...props
}: TTextareaProps<T>) {
  const { input, inputWrapper, ...restClassNames } = classNames;

  return (
    <HeroUITextarea
      classNames={{
        ...restClassNames,
        input: clsx("text-base", input),
        inputWrapper: clsx("h-[66px] px-6 py-[21px]", inputWrapper),
      }}
      color="primary"
      variant="bordered"
      {...props}
    />
  );
}

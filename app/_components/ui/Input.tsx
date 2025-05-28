import { Input as HeroUIInput, InputProps } from "@heroui/input";
import { SlotsToClasses } from "@heroui/theme";
import clsx from "clsx";

export type TInputProps = {
  classNames?: SlotsToClasses<
    | "base"
    | "input"
    | "label"
    | "description"
    | "errorMessage"
    | "mainWrapper"
    | "inputWrapper"
    | "innerWrapper"
    | "clearButton"
    | "helperWrapper"
  >;
} & Omit<InputProps, "classNames">;

export default function Input({ classNames, ...props }: TInputProps) {
  return (
    <HeroUIInput
      classNames={{
        ...classNames,
        input: clsx("text-xl", classNames?.input),
        inputWrapper: clsx(
          "!bg-white h-[66px] px-6 py-[21px]",
          classNames?.inputWrapper,
        ),
      }}
      {...props}
    />
  );
}

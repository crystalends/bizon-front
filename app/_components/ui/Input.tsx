import { Input as HeroUIInput, InputProps } from "@heroui/input";

type TButtonProps = InputProps;

export default function Input(props: TButtonProps) {
  return (
    <HeroUIInput
      classNames={{
        input: "text-xl",
        inputWrapper: "!bg-white h-[66px] px-6 py-[21px]",
      }}
      {...props}
    />
  );
}

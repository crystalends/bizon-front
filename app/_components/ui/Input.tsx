import { Input as HeroUIInput } from "@heroui/input";
import { VariantProps } from "@heroui/theme";

type TButtonProps = VariantProps<typeof HeroUIInput> &
  React.HTMLAttributes<HTMLButtonElement>;

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

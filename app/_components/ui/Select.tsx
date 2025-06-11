import { Select as HeroUISelect, SelectProps } from "@heroui/select";
import clsx from "clsx";

export type TSelectProps<T extends object = object> = SelectProps<T>;

export default function Select<T extends object = object>({
  classNames = {},
  ...props
}: TSelectProps<T>) {
  const { trigger, value, ...restClassNames } = classNames;

  return (
    <HeroUISelect
      classNames={{
        trigger: clsx(
          "h-[41px] xl:h-[66px] p-3 xl:px-6 xl:py-[21px] text-sm xl:text-base",
          trigger,
        ),
        value: clsx("text-sm xl:text-base", value),
        ...restClassNames,
      }}
      color="primary"
      variant="bordered"
      {...props}
    />
  );
}

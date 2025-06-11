import { Tabs as HeroUITabs, TabsProps } from "@heroui/tabs";
import clsx from "clsx";

export type TTabsProps<T extends object = object> = TabsProps<T>;

export default function Tabs<T extends object = object>({
  classNames = {},
  ...props
}: TTabsProps<T>) {
  const { tab, ...restClassNames } = classNames;

  return (
    <HeroUITabs
      classNames={{
        tab: clsx(
          "py-[6px] px-[14px] xl:px-[20px] h-[34px] xl:h-[40px] data-[selected=true]:border-none border border-gray-300 text-sm xl:text-xl font-medium",
          tab,
        ),
        ...restClassNames,
      }}
      color="primary"
      radius="sm"
      variant="light"
      {...props}
    />
  );
}

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
          "py-[8px] px-[20px] h-[40px] data-[selected=true]:border-none border border-gray-300",
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

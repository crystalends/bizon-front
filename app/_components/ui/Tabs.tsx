import { Tabs as HeroUITabs, TabsProps } from "@heroui/tabs";

export type TTabsProps<T extends object = object> = TabsProps<T>;

export default function Tabs<T extends object = object>({
  ...props
}: TTabsProps<T>) {
  return <HeroUITabs color="primary" variant="light" {...props} />;
}

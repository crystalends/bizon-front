"use client";

import { Tab, TabItemProps } from "@heroui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import Tabs from "@/app/_components/ui/Tabs";

type TRequestsAndOrdersProps = {
  children: ReactNode;
};

export default function RequestsAndOrders({
  children,
}: TRequestsAndOrdersProps) {
  const pathname = usePathname();

  const tabs: TabItemProps[] = [
    {
      key: "/user/orders-and-requests",
      title: "Мои заявки",
      href: "/user/orders-and-requests",
    },
    {
      key: "/user/orders-and-requests/orders-for-me",
      title: "Заявки для меня",
      href: "/user/orders-and-requests/orders-for-me",
    },
    {
      key: "/user/orders-and-requests/my-requests",
      title: "Мои запросы",
      href: "/user/orders-and-requests/my-requests",
    },
    {
      key: "/user/orders-and-requests/requests-for-me",
      title: "Мои отклики на запросы",
      href: "/user/orders-and-requests/requests-for-me",
    },
  ];

  return (
    <div className="flex w-full overflow-hidden flex-col gap-5">
      <Tabs items={tabs} selectedKey={pathname}>
        {({ key, ...item }) => <Tab key={key} as={Link} {...item} />}
      </Tabs>
      {children}
    </div>
  );
}

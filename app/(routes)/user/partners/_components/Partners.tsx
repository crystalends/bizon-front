"use client";

import { Tab, TabItemProps } from "@heroui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import Tabs from "@/app/_components/ui/Tabs";

type TPartnersProps = {
  children: ReactNode;
};

export default function Partners({ children }: TPartnersProps) {
  const pathname = usePathname();

  const tabs: TabItemProps[] = [
    {
      key: "/user/partners",
      title: "Мои заявки",
      href: "/user/partners",
    },
    {
      key: "/user/partners/partner-orders-for-me",
      title: "Заявки для меня",
      href: "/user/partners/partner-orders-for-me",
    },
    {
      key: "/user/partners/my-partner-requests",
      title: "Мои запросы",
      href: "/user/partners/my-partner-requests",
    },
    {
      key: "/user/partners/partner-requests-for-me",
      title: "Мои отклики на запросы",
      href: "/user/partners/partner-requests-for-me",
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

"use client";

import { Tab, TabItemProps } from "@heroui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import Tabs from "@/app/_components/ui/Tabs";

type TReviewsProps = {
  children: ReactNode;
};

export default function Reviews({ children }: TReviewsProps) {
  const pathname = usePathname();

  const tabs: TabItemProps[] = [
    {
      key: "/user/reviews",
      title: "Мои отзывы",
      href: "/user/reviews",
    },
    {
      key: "/user/reviews/created-with-me",
      title: "Оставленные мной",
      href: "/user/reviews/created-with-me",
    },
  ];

  return (
    <div className="flex w-full flex-col gap-5">
      <Tabs items={tabs} selectedKey={pathname}>
        {({ key, ...item }) => <Tab key={key} as={Link} {...item} />}
      </Tabs>
      {children}
    </div>
  );
}

"use client";

import { Tab, TabItemProps } from "@heroui/tabs";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import CenteredContainer from "@/app/_components/shared/CenteredContainer";
import Link from "@/app/_components/ui/Link";
import Tabs from "@/app/_components/ui/Tabs";

type TRestoreProps = {
  children: ReactNode;
};

export default function Restore({ children }: TRestoreProps) {
  const pathname = usePathname();

  const tabs: TabItemProps[] = [
    {
      key: "/restore",
      title: "Почта",
      href: "/restore",
    },
    {
      key: "/restore/phone",
      title: "Телефон",
      href: "/restore/phone",
    },
  ];

  return (
    <CenteredContainer>
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-[28px] xl:text-[44px] font-semibold">
          Восстановление пароля
        </h2>
        <Tabs fullWidth items={tabs} selectedKey={pathname}>
          {({ key, ...item }) => <Tab key={key} as={Link} {...item} />}
        </Tabs>
        <div className="flex flex-col gap-5 w-full">
          {children}
          <div className="flex justify-center">
            <Link className="font-medium" color="primary" href="/login">
              Вспомнил пароль
            </Link>
          </div>
        </div>
      </div>
    </CenteredContainer>
  );
}

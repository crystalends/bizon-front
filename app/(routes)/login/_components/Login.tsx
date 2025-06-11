"use client";

import { Tab, TabItemProps } from "@heroui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import CustomLink from "@/app/_components/ui/Link";
import Tabs from "@/app/_components/ui/Tabs";
import CenteredContainer from "@/app/_components/shared/CenteredContainer";

type TLoginProps = {
  children: ReactNode;
};

export default function Login({ children }: TLoginProps) {
  const pathname = usePathname();

  const tabs: TabItemProps[] = [
    {
      key: "/login",
      title: "Почта",
      href: "/login",
    },
    {
      key: "/login/phone",
      title: "Телефон",
      href: "/login/phone",
    },
  ];

  return (
    <CenteredContainer>
      <div className="flex flex-col gap-8 items-center">
        <h2 className="text-[28px] xl:text-[44px] font-semibold">Вход</h2>
        <div className="flex flex-col gap-5 w-full">
          <Tabs fullWidth items={tabs} selectedKey={pathname}>
            {({ key, ...item }) => <Tab key={key} as={Link} {...item} />}
          </Tabs>
          {children}
          <p className="text-xs">
            Продолжая, вы принимаете политику конфиденциальности.
          </p>
          <div className="flex justify-center">
            <CustomLink className="font-medium" color="primary" href="/restore">
              Не помню пароль
            </CustomLink>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <p className="text-xs">Впервые на сайте?</p>
          <CustomLink
            className="font-medium text-base xl:text-xl"
            color="primary"
            href="/register"
            underline="always"
          >
            Зарегистрироваться
          </CustomLink>
        </div>
      </div>
    </CenteredContainer>
  );
}

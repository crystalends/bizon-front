"use client";

import Container from "@/app/_components/shared/Container";
import Tabs from "@/app/_components/ui/Tabs";
import { Tab, TabItemProps } from "@heroui/tabs";
import Link from "next/link";
import CustomLink from "@/app/_components/ui/Link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

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
      as: Link,
    },
    {
      key: "/login/phone",
      title: "Телефон",
      href: "/login/phone",
      as: Link,
    },
  ];

  return (
    <Container className="pt-10 xl:pt-0 flex items-center justify-center min-h-[calc(100vh-80px)]">
      <div className="mx-auto text-center w-full max-w-[506px] px-4">
        <div className="flex flex-col gap-8 items-center">
          <h2 className="text-[44px] font-semibold">Вход</h2>
          <div className="flex flex-col gap-5 w-full">
            <Tabs fullWidth items={tabs} selectedKey={pathname}>
              {({ key, ...item }) => <Tab key={key} {...item} />}
            </Tabs>
            {children}
            <p className="text-xs">
              Продолжая, вы принимаете политику конфиденциальности.
            </p>
            <div className="flex justify-center">
              <CustomLink
                className="font-medium"
                href="/restore"
                color="primary"
              >
                Не помню пароль
              </CustomLink>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <p className="text-xs">Впервые на сайте?</p>
            <CustomLink
              className="font-medium text-xl"
              underline="always"
              href="/register"
              color="primary"
            >
              Зарегистрироваться
            </CustomLink>
          </div>
        </div>
      </div>
    </Container>
  );
}

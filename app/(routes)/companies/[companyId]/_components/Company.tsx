"use client";

import HeartIcon from "@/app/_components/icons/HeartIcon";
import Container from "@/app/_components/shared/Container";
import Button from "@/app/_components/ui/Button";
import TCompany from "@/app/_types/Company";
import { Tab, TabItemProps } from "@heroui/tabs";
import { usePathname } from "next/navigation";
import { BreadcrumbItem, BreadcrumbItemProps } from "@heroui/breadcrumbs";
import Breadcrumbs from "@/app/_components/ui/Breadcrumbs";
import { ReactNode } from "react";
import Tabs from "@/app/_components/ui/Tabs";
import Link from "next/link";

type TCompanyProps = { company: TCompany; children?: ReactNode };

export default function Company({
  company: { id, name },
  children,
}: TCompanyProps) {
  const pathname = usePathname();

  const breadcrumbItems: BreadcrumbItemProps[] = [
    {
      children: "Главная",
      href: "/",
    },
    {
      children: "Компании",
      href: "/companies",
    },
    {
      children: name,
      href: `/companies/${id}`,
    },
  ];

  const tabs: TabItemProps[] = [
    {
      title: "Главное",
      href: `/companies/${id}`,
    },
    {
      title: "Товары и услуги",
      href: `/companies/${id}/products`,
    },
    {
      title: "Отзывы",
      href: `/companies/${id}/reviews`,
    },
  ];

  return (
    <Container className="pt-10">
      <div className="flex flex-col gap-12">
        <Breadcrumbs>
          {breadcrumbItems.map((item, index) => (
            <BreadcrumbItem key={index} {...item} />
          ))}
        </Breadcrumbs>
        <div className="flex flex-wrap justify-between gap-5">
          <div className="flex gap-14 items-center flex-wrap">
            <h1 className="text-[44px] font-semibold">{name}</h1>
            <Button color="default">
              <HeartIcon />
            </Button>
          </div>
          <div className="flex w-full xl:w-fit flex-wrap gap-3">
            <Button className="w-full xl:w-80" color="default">
              Оставить заявку
            </Button>
            <Button className="w-full xl:w-80">Партнерство</Button>
          </div>
        </div>
        <div>
          <Tabs
            color="primary"
            variant="light"
            items={tabs}
            selectedKey={pathname}
          >
            {(item) => <Tab as={Link} key={item.href} {...item} />}
          </Tabs>
        </div>
        {children}
      </div>
    </Container>
  );
}

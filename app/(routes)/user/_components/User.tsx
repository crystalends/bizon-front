"use client";

import { BreadcrumbItem, BreadcrumbItemProps } from "@heroui/breadcrumbs";
import Link from "next/link";
import { ReactNode } from "react";

import BriefcaseIcon from "@/app/_components/icons/BriefcaseIcon";
import CardsIcon from "@/app/_components/icons/CardsIcon";
import FavoriteMessageIcon from "@/app/_components/icons/FavoriteMessageIcon";
import HeartIcon from "@/app/_components/icons/HeartIcon";
import SearchInFolder from "@/app/_components/icons/SearchInFolder";
import UserIcon from "@/app/_components/icons/UserIcon";
import Block from "@/app/_components/shared/Block";
import Container from "@/app/_components/shared/Container";
import IconedListItem, {
  TIconedListItemProps,
} from "@/app/_components/shared/IconedListItem";
import Breadcrumbs from "@/app/_components/ui/Breadcrumbs";
import ExitIcon from "@/app/_components/icons/ExitIcon";
import DialogIcon from "@/app/_components/icons/DialogIcon";

type TUserProps = { children: ReactNode };

export default function User({ children }: TUserProps) {
  const iconedListItems: TIconedListItemProps<typeof Link>[] = [
    {
      key: 1,
      name: "Данные профиля",
      startIcon: <UserIcon />,
      href: "/user",
    },
    {
      key: 2,
      name: "Данные компании",
      startIcon: <BriefcaseIcon />,
      href: "/user/company",
    },
    {
      key: 3,
      name: "Товары и услуги",
      startIcon: <CardsIcon />,
      href: "/user/products",
    },
    {
      key: 4,
      name: "Заявки и запросы",
      startIcon: <SearchInFolder />,
      href: "/user/partners",
    },
    {
      key: 5,
      name: "Избранные компании",
      startIcon: <HeartIcon />,
      href: "/user/favorite-companies",
    },
    {
      key: 6,
      name: "Чат",
      startIcon: <DialogIcon />,
      href: "/user/chat",
    },
    {
      key: 7,
      name: "Отзывы",
      startIcon: <FavoriteMessageIcon />,
      href: "/user/reviews",
    },
  ];

  const breadcrumbItems: BreadcrumbItemProps[] = [
    {
      children: "Главная",
      href: "/",
    },
    {
      children: "Личный кабинет",
      href: "/user",
    },
  ];

  return (
    <Container className="pt-10 relative">
      <div className="flex flex-col gap-12">
        <Breadcrumbs>
          {breadcrumbItems.map((item, index) => (
            <BreadcrumbItem key={index} {...item} />
          ))}
        </Breadcrumbs>
        <Block title="Личный кабинет">
          <div className="flex flex-col xl:flex-row gap-5 xl:gap-48">
            <div className="xl:sticky xl:top-10 xl:h-fit xl:self-start flex flex-col xl:min-w-[375px]">
              {iconedListItems.map(({ key, ...iconedListItem }) => (
                <IconedListItem
                  key={key}
                  as={Link}
                  isPressable
                  className="hover:bg-gray-50"
                  {...iconedListItem}
                />
              ))}
              <IconedListItem
                name="Выйти"
                startIcon={<ExitIcon />}
                className="hover:bg-gray-50 cursor-pointer"
                isPressable
              />
            </div>
            {children}
          </div>
        </Block>
      </div>
    </Container>
  );
}

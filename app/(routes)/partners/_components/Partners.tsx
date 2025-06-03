"use client";

import ArrowDown from "@/app/_components/icons/ArrowDown";
import PerpendicularArrows from "@/app/_components/icons/PerpendicularArrows";
import Block from "@/app/_components/shared/Block";
import Container from "@/app/_components/shared/Container";
import Partner from "@/app/_components/shared/Partner";
import Button from "@/app/_components/ui/Button";
import Actions from "./Actions";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import {
  BreadcrumbItem,
  BreadcrumbItemProps,
  Breadcrumbs,
} from "@heroui/breadcrumbs";
import { Image } from "@heroui/image";
import Input from "@/app/_components/ui/Input";

type TPartnersProps = {
  partners: TPartner[];
};

export default function Partners({ partners }: TPartnersProps) {
  const breadcrumbItems: BreadcrumbItemProps[] = [
    {
      children: "Главная",
      href: "/",
    },
    {
      children: "Поиск партнера",
      href: "/partners",
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
        <div className="flex gap-0 xl:gap-52">
          <Block className="w-full" title="Поиск партнера ">
            <div className="flex gap-5 flex-col">
              <p className="text-xl">
                Заполните форму "Мне нужен поставщик...", чтобы другие
                пользователи и компании могли откликнуться на ваш запрос.
              </p>
              <div className="flex flex-col gap-3">
                <Input placeholder="ФИО или название вашей компании" />
                <Input placeholder="Телефон" />
                <Input placeholder="Почта" />
                <Input placeholder="Товар/услуга" />
                <Input placeholder="Регион" />
                <Button className="h-[66px] px-10 py-4">Поиск</Button>
                <p className="text-xs">
                  Отправляя данную форму, Вы даете согласие на обработку
                  персональных данных согласно нашей политике конфиденциальности
                </p>
              </div>
            </div>
          </Block>
          <Image
            width={638}
            height={668}
            className="object-cover min-w-[638] hidden xl:inline"
            src="/images/7a0016f4d1161ba85883a2f836c017bb0a7926ca.png"
          />
        </div>
        <Block
          title="Активные запросы"
          rightContent={
            <Button
              color="default"
              startContent={<PerpendicularArrows />}
              endContent={<ArrowDown />}
            >
              Сортировать
            </Button>
          }
        >
          {partners.map(({ id, product, searcher, region, createdAt }) => (
            <Partner
              key={id}
              product={product}
              searcher={searcher}
              region={region}
              createdAt={format(createdAt, "dd.MM.yyyy", {
                locale: ru,
              })}
              rightContent={<Actions className="xl:min-w-[487px]" />}
            />
          ))}
        </Block>
      </div>
    </Container>
  );
}

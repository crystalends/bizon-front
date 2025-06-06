"use client";

import { format } from "date-fns";
import { ru } from "date-fns/locale";
import {
  BreadcrumbItem,
  BreadcrumbItemProps,
  Breadcrumbs,
} from "@heroui/breadcrumbs";
import { Image } from "@heroui/image";

import Actions from "./Actions";

import ArrowDown from "@/app/_components/icons/ArrowDown";
import PerpendicularArrows from "@/app/_components/icons/PerpendicularArrows";
import Block from "@/app/_components/shared/Block";
import Container from "@/app/_components/shared/Container";
import Partner from "@/app/_components/shared/Partner";
import Button from "@/app/_components/ui/Button";
import Input from "@/app/_components/ui/Input";
import RegionChips from "@/app/_components/RegionChips";
import FormButton from "@/app/_components/ui/FormButton";
import TPartnerRequest from "@/app/_types/PartnerRequest";

type TPartnerRequestsProps = {
  partnerRequests: TPartnerRequest[];
};

export default function PartnerRequests({
  partnerRequests,
}: TPartnerRequestsProps) {
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
                Заполните данную форму, чтобы другие пользователи и компании
                могли откликнуться на ваш запрос на оказание необходимой услуги
                или доставку товара.
              </p>
              <div className="flex flex-col gap-3">
                <Input placeholder="Товар или услуга" />
                <FormButton className="h-[66px] px-10 py-4">Поиск</FormButton>
                <p className="text-xs">
                  Отправляя данную форму, Вы даете согласие на обработку
                  персональных данных согласно нашей политике конфиденциальности
                </p>
              </div>
            </div>
          </Block>
          <Image
            className="object-cover min-w-[638px] hidden xl:inline"
            height={450}
            src="/images/7a0016f4d1161ba85883a2f836c017bb0a7926ca.png"
            width={638}
          />
        </div>
        <Block
          rightContent={
            <Button
              color="default"
              endContent={<ArrowDown />}
              startContent={<PerpendicularArrows />}
            >
              Сортировать
            </Button>
          }
          title="Активные запросы"
        >
          {partnerRequests.map(({ id, product, user, createdAt }) => (
            <Partner
              key={id}
              createdAt={format(createdAt, "dd.MM.yyyy", {
                locale: ru,
              })}
              middleContent={
                user?.company?.regions && (
                  <RegionChips regions={user.company.regions} />
                )
              }
              product={product}
              renderSearcher={(searcher) => (
                <p className="text-xl">Ищет: {searcher}</p>
              )}
              rightContent={<Actions className="xl:min-w-[487px]" />}
              searcher={user?.company?.name || user?.name}
            />
          ))}
        </Block>
      </div>
    </Container>
  );
}

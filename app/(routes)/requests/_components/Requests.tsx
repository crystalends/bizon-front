"use client";

import { format } from "date-fns";
import {
  BreadcrumbItem,
  BreadcrumbItemProps,
  Breadcrumbs,
} from "@heroui/breadcrumbs";
import { Image } from "@heroui/image";
import { SelectItem } from "@heroui/select";

import Actions from "./Actions";

import ArrowDown from "@/app/_components/icons/ArrowDown";
import PerpendicularArrows from "@/app/_components/icons/PerpendicularArrows";
import Block from "@/app/_components/shared/Block";
import Container from "@/app/_components/shared/Container";
import InfoListItem from "@/app/_components/shared/InfoListItem";
import Button from "@/app/_components/ui/Button";
import Input from "@/app/_components/ui/Input";
import RegionChips from "@/app/_components/RegionChips";
import FormButton from "@/app/_components/ui/FormButton";
import TRequest from "@/app/_types/Request";
import TRegion from "@/app/_types/Region";
import Select from "@/app/_components/ui/Select";

type TRequestsProps = {
  requests: TRequest[];
  regions: TRegion[];
};

export default function Requests({ requests, regions }: TRequestsProps) {
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
              <p className="text-base xl:text-xl">
                Заполните данную форму, чтобы другие пользователи и компании
                могли откликнуться на ваш запрос на оказание необходимой услуги
                или доставку товара.
              </p>
              <div className="flex flex-col gap-3">
                <Input placeholder="Товар или услуга" />
                <Select
                  aria-label="Выберите регион"
                  items={regions}
                  placeholder="Выберите регион"
                >
                  {(item) => <SelectItem key={item.id}>{item.name}</SelectItem>}
                </Select>
                <FormButton>Поиск</FormButton>
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
          {requests.map(({ id, product, region, user, createdAt }) => (
            <InfoListItem
              key={id}
              bottom={`Опубликовано: ${format(createdAt, "dd.MM.yyyy")}`}
              description={`Ищет: ${user?.company?.name || user?.name}`}
              middleContent={region ? <RegionChips regions={[region]} /> : null}
              renderDescription={(description) => (
                <p className="text-sm xl:text-xl">{description}</p>
              )}
              renderTitle={(title) => (
                <h2 className="font-semibold text-[21px] xl:text-[32px]">
                  {title}
                </h2>
              )}
              rightContent={<Actions className="xl:min-w-[487px]" />}
              title={product}
            />
          ))}
        </Block>
      </div>
    </Container>
  );
}

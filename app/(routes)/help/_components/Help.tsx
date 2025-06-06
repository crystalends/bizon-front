"use client";

import {
  Accordion,
  AccordionItem,
  AccordionItemProps,
} from "@heroui/accordion";
import {
  BreadcrumbItem,
  BreadcrumbItemProps,
  Breadcrumbs,
} from "@heroui/breadcrumbs";
import { Image } from "@heroui/image";

import FeatureCardBody, {
  TFeatureCardBodyProps,
} from "@/app/_components/FeatureCardBody";
import OneInCircleIcon from "@/app/_components/icons/OneInCircleIcon";
import ThreeInCircleIcon from "@/app/_components/icons/ThreeInCircleIcon";
import TwoInCircleIcon from "@/app/_components/icons/TwoInCircleIcon";
import Block from "@/app/_components/shared/Block";
import Container from "@/app/_components/shared/Container";
import FeatureCard from "@/app/_components/ui/FeatureCard";

export default function Help() {
  const breadcrumbItems: BreadcrumbItemProps[] = [
    {
      children: "Главная",
      href: "/",
    },
    {
      children: "Центр помощи",
      href: "/help",
    },
  ];

  const accordionItems: AccordionItemProps[] = [
    {
      key: 1,
      title: (
        <h3 className="text-2xl font-medium">Как начать работу с BizON?</h3>
      ),
    },
    {
      key: 2,
      title: (
        <h3 className="text-2xl font-medium">Как проверяются документы?</h3>
      ),
      children:
        "Да, платформа оптимизирована для малых и средних компаний. Бесплатный тариф позволяет тестировать функционал, а гибкие опции масштабируются под рост бизнеса.",
    },
    {
      key: 3,
      title: (
        <h3 className="text-2xl font-medium">
          Подходит ли BizON для малого бизнеса?
        </h3>
      ),
    },
    {
      key: 4,
      title: (
        <h3 className="text-2xl font-medium">
          Что делать, если не нашёл нужную услугу?
        </h3>
      ),
    },
    {
      key: 5,
      title: (
        <h3 className="text-2xl font-medium">
          Есть ли ограничения на количество товаров/услуг?
        </h3>
      ),
    },
    {
      key: 6,
      title: (
        <h3 className="text-2xl font-medium">
          Как работает техническая поддержка?
        </h3>
      ),
    },
  ];

  const features: TFeatureCardBodyProps[] = [
    {
      key: 1,
      title: "Регистрируетесь на платформе",
      description:
        "Процесс регистрации создан максимально простым и интуитивно понятным, чтобы вы могли быстро начать пользоваться всеми возможностями сервиса.",
      icon: <OneInCircleIcon />,
    },
    {
      key: 2,
      title: "Заполняете личный кабинет",
      description:
        "Заполните личный кабинет, добавьте информацию о компании, загрузите данные о ваших товарах и услугах.",
      icon: <TwoInCircleIcon />,
    },
    {
      key: 3,
      title: "Продавайте с BizON",
      description:
        "Получите доступ к тысячам потенциальных клиентов и партнёров по всей стране, развивайте бизнес и увеличивайте продажи.",
      icon: <ThreeInCircleIcon />,
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
        <div className="flex gap-0 xl:gap-24">
          <Block className="w-full" title="Частые вопросы">
            <Accordion className="break-all">
              {accordionItems.map(({ key, ...item }) => (
                <AccordionItem key={key} {...item} />
              ))}
            </Accordion>
          </Block>
          <Image
            className="object-cover min-w-[638] hidden xl:inline"
            height={560}
            src="/images/f0f86a763732cad1bda6d183e7112771772056bc.png"
            width={638}
          />
        </div>
        <Block title="Как добавить компанию?">
          <div className="flex flex-wrap xl:flex-nowrap justify-center gap-5">
            {features.map(({ key, ...advantage }) => (
              <FeatureCard key={key}>
                <FeatureCardBody {...advantage} />
              </FeatureCard>
            ))}
          </div>
        </Block>
      </div>
    </Container>
  );
}

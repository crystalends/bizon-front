"use client";

import { BreadcrumbItem, BreadcrumbItemProps } from "@heroui/breadcrumbs";
import { Image } from "@heroui/image";

import Container from "@/app/_components/shared/Container";
import Breadcrumbs from "@/app/_components/ui/Breadcrumbs";
import TArticle from "@/app/_types/Article";

type TArticleProps = {
  article: TArticle;
};

export default function Article({
  article: { id, title, value, image },
}: TArticleProps) {
  const breadcrumbItems: BreadcrumbItemProps[] = [
    {
      children: "Главная",
      href: "/",
    },
    {
      children: "Блог",
      href: "/blog",
    },
    {
      children: title,
      href: `/blog/${id}`,
    },
  ];

  return (
    <Container className="pt-10 flex flex-col gap-12">
      <div className="flex flex-col gap-12">
        <Breadcrumbs>
          {breadcrumbItems.map((item, index) => (
            <BreadcrumbItem key={index} {...item} />
          ))}
        </Breadcrumbs>
        <div className="mx-auto w-full max-w-[770px] flex flex-col gap-5">
          <Image src={image} />
          <h2 className="text-[32px] font-semibold">{title}</h2>
          <p>{value}</p>
        </div>
      </div>
    </Container>
  );
}

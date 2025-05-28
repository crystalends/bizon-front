"use client";

import Container from "@/app/_components/shared/Container";
import TCategory from "@/app/_types/Category";
import {
  BreadcrumbItem,
  BreadcrumbItemProps,
  Breadcrumbs,
} from "@heroui/breadcrumbs";

type TCategoryProps = {
  category: TCategory;
};

export default function Category({
  category: { id, name, image },
}: TCategoryProps) {
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

  return (
    <Container className="flex pt-10 flex-col gap-8 xl:gap-16">
      <Breadcrumbs
        itemClasses={{
          separator: "px-2",
        }}
        separator="/"
      >
        {breadcrumbItems.map((breadcrumbItem) => (
          <BreadcrumbItem {...breadcrumbItem} />
        ))}
      </Breadcrumbs>
    </Container>
  );
}

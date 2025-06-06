"use client";

import { BreadcrumbItemProps } from "@heroui/breadcrumbs";
import Link from "next/link";

import CategoryTemplate from "./CategoryTemplate";

import TCategory from "@/app/_types/Category";
import IconedListItem from "@/app/_components/shared/IconedListItem";

type TCategoriesProps = {
  categories: TCategory[];
};

export default function Categories({ categories }: TCategoriesProps) {
  const breadcrumbItems: BreadcrumbItemProps[] = [
    {
      children: "Главная",
      href: "/",
    },
    {
      children: "Категории",
      href: "/categories",
    },
  ];

  return (
    <CategoryTemplate breadcrumbItems={breadcrumbItems} title="Категории">
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] gap-x-5">
        <IconedListItem
          isPressable
          as={Link}
          className="hover:bg-gray-50"
          href="/companies"
          name="Все категории"
        />
        {categories.map(({ id, name, image }) => (
          <IconedListItem
            key={id}
            isPressable
            as={Link}
            className="hover:bg-gray-50"
            href={`/categories/${id}`}
            imageProps={{ src: image }}
            name={name}
          />
        ))}
      </div>
    </CategoryTemplate>
  );
}

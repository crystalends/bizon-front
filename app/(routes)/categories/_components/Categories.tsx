"use client";

import { BreadcrumbItemProps } from "@heroui/breadcrumbs";
import CategoryTemplate from "./CategoryTemplate";
import Link from "next/link";
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
    <CategoryTemplate title="Категории" breadcrumbItems={breadcrumbItems}>
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] gap-x-5">
        <IconedListItem
          name="Все категории"
          className="hover:bg-gray-50"
          isPressable
          as={Link}
          href="/companies"
        />
        {categories.map(({ id, name, image }) => (
          <IconedListItem
            key={id}
            name={name}
            imageProps={{ src: image }}
            className="hover:bg-gray-50"
            isPressable
            as={Link}
            href={`/categories/${id}`}
          />
        ))}
      </div>
    </CategoryTemplate>
  );
}

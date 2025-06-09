"use client";

import { BreadcrumbItemProps } from "@heroui/breadcrumbs";
import Link from "next/link";

import CategoryTemplate from "./CategoryTemplate";

import TCategory from "@/app/_types/Category";
import IconedListItem from "@/app/_components/shared/IconedListItem";
import SubCategories from "./SubCategories";

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
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
        <div className="break-inside-avoid">
          <IconedListItem
            isPressable
            as={Link}
            className="hover:bg-gray-50"
            href="/companies"
            name="Все категории"
          />
        </div>
        {categories.map(({ id, name, image, childs }) => (
          <div key={id} className="break-inside-avoid">
            <IconedListItem
              isPressable
              as={Link}
              className="hover:bg-gray-50"
              href={`/categories/${id}`}
              imageProps={{ src: image }}
              name={name}
              endContent={childs && <SubCategories categories={childs} />}
            />
          </div>
        ))}
      </div>
    </CategoryTemplate>
  );
}

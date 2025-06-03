"use client";

import { BreadcrumbItemProps } from "@heroui/breadcrumbs";
import CategoryTemplate from "./CategoryTemplate";
import CategoryPreview from "@/app/_components/shared/CategoryPreview";
import Link from "next/link";
import TCategory from "@/app/_types/Category";
import ArrowRightIcon from "@/app/_components/icons/ArrowRightIcon";

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
        <CategoryPreview
          name={"Все категории"}
          className="hover:bg-gray-50"
          isPressable
          as={Link}
          href="/companies"
          endIcon={<ArrowRightIcon />}
        />
        {categories.map(({ id, name, image }) => (
          <CategoryPreview
            key={id}
            name={name}
            imageProps={{ src: image }}
            className="hover:bg-gray-50"
            isPressable
            as={Link}
            href={`/categories/${id}`}
            endIcon={<ArrowRightIcon />}
          />
        ))}
      </div>
    </CategoryTemplate>
  );
}

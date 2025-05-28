"use client";

import Block from "@/app/_components/Block";
import GlobalSearch from "@/app/_components/GlobalSearch";
import TCategory from "@/app/_types/Category";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbItemProps,
} from "@heroui/breadcrumbs";
import Container from "@/app/_components/shared/Container";
import CategoryPreview from "@/app/_components/shared/CategoryPreview";

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
      children: "Компании",
      href: "/companies",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col gap-12">
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
        <Block title="Компании">
          <GlobalSearch
            inputProps={{
              classNames: {
                inputWrapper: "border border-primary",
              },
            }}
          />
          <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] gap-x-5">
            <CategoryPreview category={{ id: 0, name: "Все категории" }} />
            {categories.map((category) => (
              <CategoryPreview key={category.id} category={category} />
            ))}
          </div>
        </Block>
      </div>
    </Container>
  );
}

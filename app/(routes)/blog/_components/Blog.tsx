"use client";

import { format } from "date-fns";
import ArticlePreview from "@/app/_components/shared/ArticlePreview";
import Block from "@/app/_components/shared/Block";
import Container from "@/app/_components/shared/Container";
import TArticle from "@/app/_types/Article";
import Link from "@/app/_components/ui/Link";
import Breadcrumbs from "@/app/_components/ui/Breadcrumbs";
import { BreadcrumbItem, BreadcrumbItemProps } from "@heroui/breadcrumbs";

type TBlogProps = {
  articles: TArticle[];
};

export default function Blog({ articles }: TBlogProps) {
  const breadcrumbItems: BreadcrumbItemProps[] = [
    {
      children: "Главная",
      href: "/",
    },
    {
      children: "Блог",
      href: "/blog",
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
        <Block title="Блог BizON">
          <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] gap-5">
            {articles.map(({ id, title, image, createdAt }) => {
              return (
                <ArticlePreview
                  key={id}
                  createdAt={format(createdAt, "dd.MM.yyyy")}
                  imageProps={{
                    src: image,
                  }}
                  title={title}
                  renderTitle={(title) => (
                    <Link href={`/blog/${id}`}>
                      <h4 className="text-xl font-semibold">{title}</h4>
                    </Link>
                  )}
                />
              );
            })}
          </div>
        </Block>
      </div>
    </Container>
  );
}

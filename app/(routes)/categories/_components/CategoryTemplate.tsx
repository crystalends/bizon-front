"use client";

import { ReactNode } from "react";
import { BreadcrumbItem, BreadcrumbItemProps } from "@heroui/breadcrumbs";

import Container from "@/app/_components/shared/Container";
import GlobalSearch from "@/app/_components/GlobalSearch";
import Breadcrumbs from "@/app/_components/ui/Breadcrumbs";
import Block from "@/app/_components/shared/Block";

type TCategoryTemplateProps = {
  title: string;
  breadcrumbItems: BreadcrumbItemProps[];
  paginateSlot?: ReactNode;
  children?: ReactNode;
  containerClassName?: string;
};

export default function CategoryTemplate({
  title,
  breadcrumbItems,
  paginateSlot,
  children,
}: TCategoryTemplateProps) {
  return (
    <Container className="pt-10">
      <div className="flex flex-col gap-12">
        <Breadcrumbs>
          {breadcrumbItems.map((item, index) => (
            <BreadcrumbItem key={index} {...item} />
          ))}
        </Breadcrumbs>
        <Block title={title}>
          <div className="flex flex-col gap-12">
            <GlobalSearch
              inputProps={{
                classNames: {
                  input: "text-xl",
                },
                variant: "bordered",
                color: "primary",
              }}
            />
            {children}
          </div>
        </Block>
        {paginateSlot}
      </div>
    </Container>
  );
}

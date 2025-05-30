"use client";

import { ReactNode } from "react";
import Block from "@/app/_components/Block";
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbItemProps,
} from "@heroui/breadcrumbs";
import Container from "@/app/_components/shared/Container";
import GlobalSearch from "@/app/_components/GlobalSearch";

type TCategoryTemplateProps = {
  title: string;
  breadcrumbItems: BreadcrumbItemProps[];
  children?: ReactNode;
  containerClassName?: string;
};

export default function CategoryTemplate({
  title,
  breadcrumbItems,
  children,
}: TCategoryTemplateProps) {
  return (
    <Container className="pt-10">
      <div className="flex flex-col gap-12">
        <Breadcrumbs itemClasses={{ separator: "px-2" }} separator="/">
          {breadcrumbItems.map((item, index) => (
            <BreadcrumbItem key={index} {...item} />
          ))}
        </Breadcrumbs>
        <Block title={title}>
          <div className="flex flex-col gap-12">
            <GlobalSearch
              inputProps={{
                classNames: {
                  inputWrapper: "border border-primary",
                },
              }}
            />
            {children}
          </div>
        </Block>
      </div>
    </Container>
  );
}

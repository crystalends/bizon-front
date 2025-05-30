import TPolymorphicProps from "@/app/_types/Polymorphic";
import {
  BreadcrumbsProps,
  Breadcrumbs as HeroUIBreadcrumbs,
} from "@heroui/breadcrumbs";
import clsx from "clsx";
import { ElementType } from "react";

export type TBreadcrumbsProps<T extends ElementType = "div"> =
  TPolymorphicProps<T, BreadcrumbsProps>;

export default function Breadcrumbs<T extends ElementType = "div">({
  className,
  itemClasses = {},
  ...props
}: TBreadcrumbsProps<T>) {
  return (
    <HeroUIBreadcrumbs
      itemClasses={{
        separator: clsx("px-2", itemClasses.separator),
        ...itemClasses,
      }}
      separator="/"
      {...props}
    />
  );
}

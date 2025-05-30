import { ComponentPropsWithoutRef, ElementType } from "react";

type TPolymorphicProps<
  DefaultElement extends ElementType,
  InheritableElement = {},
> = InheritableElement & {
  as?: DefaultElement;
} & Omit<ComponentPropsWithoutRef<DefaultElement>, keyof InheritableElement>;

export default TPolymorphicProps;

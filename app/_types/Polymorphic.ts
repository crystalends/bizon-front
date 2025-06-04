import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardRefExoticComponent,
} from "react";

type TPolymorphicProps<
  DefaultElement extends ElementType | ForwardRefExoticComponent<any>,
  InheritableElement = {},
> = InheritableElement & {
  as?: DefaultElement;
} & Omit<ComponentPropsWithoutRef<DefaultElement>, keyof InheritableElement>;

export default TPolymorphicProps;

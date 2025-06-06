import { ModalProps, Modal as HeroUIModal } from "@heroui/modal";
import { ElementType } from "react";
import clsx from "clsx";

import TPolymorphicProps from "@/app/_types/Polymorphic";

export type TModalProps<T extends ElementType = "div"> = TPolymorphicProps<
  T,
  ModalProps
>;

export default function Modal<T extends ElementType = "div">({
  className,
  ...props
}: TModalProps<T>) {
  return (
    <HeroUIModal
      className={clsx("py-10 px-5 rounded-lg", className)}
      {...props}
    />
  );
}

"use client";

import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import Button, { TButtonProps } from "@/app/_components/ui/Button";
import Modal from "@/app/_components/ui/Modal";
import {
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import ContactInformation from "@/app/_components/shared/ContactInformation";

type TActionsProps = ComponentPropsWithoutRef<"div">;

export default function Actions({ className, ...props }: TActionsProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const actions: TButtonProps[] = [
    {
      key: 1,
      color: "secondary",
      variant: "bordered",
      children: "Отменить запрос",
    },
    {
      key: 2,
      children: "Посмотреть контакты",
      onPress: onOpen,
    },
  ];

  return (
    <>
      <div className={clsx("flex w-full flex-col gap-3", className)} {...props}>
        {actions.map(({ key, ...action }) => (
          <Button key={key} {...action} />
        ))}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="max-w-[586px] w-full">
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-[26px] xl:text-[40px] font-semibold">
                  Контакты
                </h2>
              </ModalHeader>
              <ModalBody>
                <ContactInformation
                  phone="+79263057575"
                  email="lorem@gmail.com"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

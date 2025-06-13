"use client";

import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import {
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";

import Button, { TButtonProps } from "@/app/_components/ui/Button";
import Modal from "@/app/_components/ui/Modal";
import Partner from "@/app/_components/shared/InfoListItem";
import RegionChips from "@/app/_components/RegionChips";

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
      children: "Посмотреть отклики",
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
        <ModalContent className="max-w-[1113px] w-full">
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-[26px] xl:text-[40px] font-semibold">
                  Отклики
                </h2>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-5">
                  <Partner
                    middleContent={
                      <RegionChips
                        regions={[
                          { id: 1, name: "Москва" },
                          { id: 2, name: "Электроугли" },
                        ]}
                      />
                    }
                    rightContent={
                      <Button fullWidth className="xl:max-w-[355px]">
                        Перейти в чат
                      </Button>
                    }
                    title="Имя и фамилия или название компании"
                  />
                  <Partner
                    middleContent={
                      <RegionChips
                        regions={[
                          { id: 1, name: "Москва" },
                          { id: 2, name: "Электроугли" },
                        ]}
                      />
                    }
                    rightContent={
                      <Button fullWidth className="xl:max-w-[355px]">
                        Перейти в чат
                      </Button>
                    }
                    title="Имя и фамилия или название компании"
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

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
import Partner from "@/app/_components/shared/InfoCard";
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
                    title="Имя и фамилия или название компании"
                    rightContent={
                      <Button fullWidth className="xl:max-w-[355px]">
                        Перейти в чат
                      </Button>
                    }
                    middleContent={
                      <RegionChips
                        regions={[
                          { id: 1, name: "Москва" },
                          { id: 2, name: "Электроугли" },
                        ]}
                      />
                    }
                  />
                  <Partner
                    title="Имя и фамилия или название компании"
                    rightContent={
                      <Button fullWidth className="xl:max-w-[355px]">
                        Перейти в чат
                      </Button>
                    }
                    middleContent={
                      <RegionChips
                        regions={[
                          { id: 1, name: "Москва" },
                          { id: 2, name: "Электроугли" },
                        ]}
                      />
                    }
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

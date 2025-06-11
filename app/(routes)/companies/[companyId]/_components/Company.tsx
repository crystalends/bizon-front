"use client";

import { Tab, TabItemProps } from "@heroui/tabs";
import { usePathname } from "next/navigation";
import { BreadcrumbItem, BreadcrumbItemProps } from "@heroui/breadcrumbs";
import { ReactNode } from "react";
import Link from "next/link";
import HeartIcon from "@/app/_components/icons/HeartIcon";
import Container from "@/app/_components/shared/Container";
import Button from "@/app/_components/ui/Button";
import TCompany from "@/app/_types/Company";
import Breadcrumbs from "@/app/_components/ui/Breadcrumbs";
import Tabs from "@/app/_components/ui/Tabs";
import Block from "@/app/_components/shared/Block";
import {
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import Modal from "@/app/_components/ui/Modal";
import TRegion from "@/app/_types/Region";
import Select from "@/app/_components/ui/Select";
import { SelectItem } from "@heroui/select";
import TProduct from "@/app/_types/Product";
import FormButton from "@/app/_components/ui/FormButton";
import Input from "@/app/_components/ui/Input";

type TCompanyProps = {
  company: TCompany;
  regions: TRegion[];
  products: TProduct[];
  children: ReactNode;
};

export default function Company({
  company: { id, name },
  regions,
  products,
  children,
}: TCompanyProps) {
  const disclosureOrder = useDisclosure();
  const disclosurePartnershipRequests = useDisclosure();

  const pathname = usePathname();

  const breadcrumbItems: BreadcrumbItemProps[] = [
    {
      children: "Главная",
      href: "/",
    },
    {
      children: "Компании",
      href: "/companies",
    },
    {
      children: name,
      href: `/companies/${id}`,
    },
  ];

  const tabs: TabItemProps[] = [
    {
      title: "Главное",
      href: `/companies/${id}`,
    },
    {
      title: "Товары и услуги",
      href: `/companies/${id}/products`,
    },
    {
      title: "Отзывы",
      href: `/companies/${id}/reviews`,
    },
  ];

  console.log(regions);

  return (
    <>
      <Container className="pt-10">
        <div className="flex flex-col gap-12">
          <Breadcrumbs>
            {breadcrumbItems.map((item, index) => (
              <BreadcrumbItem key={index} {...item} />
            ))}
          </Breadcrumbs>
          <Block
            renderTitle={(title) => (
              <div className="flex gap-14 w-full xl:w-fit justify-between xl:justify-normal items-center flex-wrap">
                <h1 className="text-[44px] font-semibold">{title}</h1>
                <Button isIconOnly variant="light">
                  <HeartIcon />
                </Button>
              </div>
            )}
            rightContent={
              <div className="flex w-full xl:w-fit flex-wrap gap-3">
                <Button
                  onPress={disclosureOrder.onOpen}
                  className="w-full xl:w-80"
                  color="secondary"
                  variant="bordered"
                >
                  Оставить заявку
                </Button>
                <Button
                  className="w-full xl:w-80"
                  onPress={disclosurePartnershipRequests.onOpen}
                >
                  Партнерство
                </Button>
              </div>
            }
            title={name}
          >
            <Tabs
              color="primary"
              items={tabs}
              selectedKey={pathname}
              variant="light"
            >
              {(item) => <Tab key={item.href} as={Link} {...item} />}
            </Tabs>
            {children}
          </Block>
        </div>
      </Container>
      <Modal
        isOpen={disclosureOrder.isOpen}
        onOpenChange={disclosureOrder.onOpenChange}
      >
        <ModalContent className="max-w-[586px] w-full">
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-[40px] font-semibold">Оставить заявку</h2>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <Select
                    aria-label="Выберите товар или услугу"
                    items={products}
                    placeholder="Выберите товар или услугу"
                  >
                    {(item) => (
                      <SelectItem key={item.id}>{item.name}</SelectItem>
                    )}
                  </Select>
                  <Select
                    aria-label="Выберите регион"
                    items={regions}
                    placeholder="Выберите регион"
                  >
                    {(item) => (
                      <SelectItem key={item.id}>{item.name}</SelectItem>
                    )}
                  </Select>
                  <FormButton onPress={onClose}>Отправить</FormButton>
                  <p className="text-xs">
                    Нажимая кнопку «Отправить», вы соглашаетесь с условиями
                    использования и обработкой персональных данных
                  </p>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        isOpen={disclosurePartnershipRequests.isOpen}
        onOpenChange={disclosurePartnershipRequests.onOpenChange}
      >
        <ModalContent className="max-w-[586px] w-full">
          {(onClose) => (
            <>
              <ModalHeader>
                <h2 className="text-[40px] font-semibold">Партнерство</h2>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-3">
                  <Input placeholder="Ваше предложение" />
                  <Select
                    aria-label="Выберите регион"
                    items={regions}
                    placeholder="Выберите регион"
                  >
                    {(item) => (
                      <SelectItem key={item.id}>{item.name}</SelectItem>
                    )}
                  </Select>
                  <FormButton onPress={onClose}>Отправить</FormButton>
                  <p className="text-xs">
                    Нажимая кнопку «Отправить», вы соглашаетесь с условиями
                    использования и обработкой персональных данных
                  </p>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

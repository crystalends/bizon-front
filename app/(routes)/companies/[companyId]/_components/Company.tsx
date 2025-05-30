"use client";

import HeartIcon from "@/app/_components/icons/HeartIcon";
import Container from "@/app/_components/shared/Container";
import Button from "@/app/_components/ui/Button";
import TCompany from "@/app/_types/Company";
import { Tab, TabItemProps, Tabs } from "@heroui/tabs";
import { Image } from "@heroui/image";
import { usePathname } from "next/navigation";
import { Card, CardBody } from "@heroui/card";
import DetailIsVerified from "@/app/_components/shared/DetailIsVerified";
import CategoryChips from "@/app/_components/CategoryChips";
import RegionChips from "@/app/_components/RegionChips";
import ContactInformation from "@/app/_components/shared/ContactInformation";
import Details from "@/app/_components/shared/Details";
import { BreadcrumbItem, BreadcrumbItemProps } from "@heroui/breadcrumbs";
import Breadcrumbs from "@/app/_components/ui/Breadcrumbs";

type TCompanyProps = { company: TCompany };

export default function Company({
  company: {
    id,
    name,
    description,
    categories,
    regions,
    image,
    details,
    isVerified,
    contactInformation,
  },
}: TCompanyProps) {
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
      title: "Товары/услуги",
      href: `/companies/${id}/products`,
    },
    {
      title: "Отзывы",
      href: `/companies/${id}/ratings`,
    },
  ];

  return (
    <Container className="pt-10">
      <div className="flex flex-col gap-12">
        <Breadcrumbs>
          {breadcrumbItems.map((item, index) => (
            <BreadcrumbItem key={index} {...item} />
          ))}
        </Breadcrumbs>
        <div className="flex flex-wrap justify-between gap-5">
          <div className="flex gap-14 items-center flex-wrap">
            <h1 className="text-[44px] font-semibold">{name}</h1>
            <Button color="default">
              <HeartIcon />
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button color="default">Оставить заявку</Button>
            <Button>Партнерство</Button>
          </div>
        </div>
        <div>
          <Tabs
            color="primary"
            variant="light"
            items={tabs}
            selectedKey={pathname}
          >
            {(item) => <Tab key={item.href} {...item} />}
          </Tabs>
        </div>
        <div className="flex flex-col xl:flex-row gap-5">
          {image && (
            <div className="xl:min-w-[375] h-fit flex justify-center shadow-sm rounded-lg">
              <Image src={image} width={375} />
            </div>
          )}
          <div className="flex w-full flex-col gap-5">
            <Card shadow="md">
              <CardBody>
                <div className="flex flex-col gap-5">
                  {isVerified && <DetailIsVerified />}
                  <h1 className="text-[40px] font-semibold">{name}</h1>
                  <p>
                    Продажа кабельных систем электрического обогрева - теплые
                    полы, саморегулируемые кабели, наружный обогрев,
                    терморегуляторы и автоматика.
                  </p>
                </div>
              </CardBody>
            </Card>
            {categories && categories.length > 0 && (
              <Card shadow="md">
                <CardBody>
                  <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold">
                      Отрасли деятельности
                    </h1>
                    <CategoryChips categories={categories} />
                  </div>
                </CardBody>
              </Card>
            )}
            {regions && regions.length > 0 && (
              <Card shadow="md">
                <CardBody>
                  <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold">Регионы работы</h1>
                    <RegionChips regions={regions} />
                  </div>
                </CardBody>
              </Card>
            )}
            {details && (
              <Card shadow="md">
                <CardBody>
                  <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold">Реквизиты</h1>
                    <Details
                      INN={details.INN}
                      KPP={details.KPP}
                      OGRN={details.OGRN}
                    />
                  </div>
                </CardBody>
              </Card>
            )}
            {contactInformation && (
              <Card shadow="md">
                <CardBody>
                  <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold">
                      Контактная информация
                    </h1>
                    <ContactInformation
                      VK={contactInformation.VK}
                      linkedIn={contactInformation.linkedIn}
                      email={contactInformation.email}
                      phone={contactInformation.phone}
                      site={contactInformation.site}
                      geo={contactInformation.geo}
                    />
                  </div>
                </CardBody>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

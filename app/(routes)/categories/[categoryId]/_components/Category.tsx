"use client";

import { BreadcrumbItemProps } from "@heroui/breadcrumbs";
import { useDisclosure } from "@heroui/modal";
import {
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import CategoryTemplate from "../../_components/CategoryTemplate";
import CompanyListItemWrapper from "./CompanyListItemWrapper";
import ProductPreviewGrid from "./ProductPreviewGrid";
import DetailRating from "./DetailRating";
import CompanyGridItemWrapper from "./CompanyGridItemWrapper";
import TCategory from "@/app/_types/Category";
import TCompany from "@/app/_types/Company";
import CategoryChips from "@/app/_components/CategoryChips";
import Button from "@/app/_components/ui/Button";
import Rating from "@/app/_components/shared/Rating";
import AppsIcon from "@/app/_components/icons/AppsIcon";
import ListIcon from "@/app/_components/icons/ListIcon";
import { useViewModeStore } from "@/app/_stores/viewModeStore";
import SlidersIcon from "@/app/_components/icons/SlidersIcon";
import PerpendicularArrows from "@/app/_components/icons/PerpendicularArrows";
import ArrowDown from "@/app/_components/icons/ArrowDown";
import Drawer from "@/app/_components/ui/Drawer";
import { ReactNode } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { CheckboxGroup, Checkbox } from "@heroui/checkbox";

type TCategoryProps = {
  category: TCategory;
  categories: TCategory[];
  companies: TCompany[];
  paginateSlot?: ReactNode;
};

export default function Category({
  category: { id, name },
  companies,
  categories,
  paginateSlot,
}: TCategoryProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const viewMode = useViewModeStore((store) => store.viewMode);
  const setViewMode = useViewModeStore((store) => store.setViewMode);

  const breadcrumbItems: BreadcrumbItemProps[] = [
    {
      children: "Главная",
      href: "/",
    },
    {
      children: "Категории",
      href: "/categories",
    },
    {
      children: name,
      href: `/categories/${id}`,
    },
  ];

  return (
    <>
      <CategoryTemplate
        paginateSlot={paginateSlot}
        breadcrumbItems={breadcrumbItems}
        title={name}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center flex-wrap justify-between gap-5">
            <div className="flex flex-wrap gap-2">
              <Button
                color="default"
                startContent={<SlidersIcon />}
                onPress={onOpen}
              >
                Фильтры
              </Button>
              <Button
                color="default"
                endContent={<ArrowDown />}
                startContent={<PerpendicularArrows />}
              >
                Сортировать
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                isIconOnly
                variant="light"
                onPress={() => setViewMode("list")}
              >
                <ListIcon fill={viewMode == "list" ? "#1E3A8A" : "#D4D4D4"} />
              </Button>
              <Button
                isIconOnly
                variant="light"
                onPress={() => setViewMode("grid")}
              >
                <AppsIcon fill={viewMode == "grid" ? "#1E3A8A" : "#D4D4D4"} />
              </Button>
            </div>
          </div>
          {viewMode === "list" ? (
            <div className="flex flex-col gap-5">
              {companies.map((company) => {
                const { id, _count, rating, categories, products } = company;

                return (
                  <CompanyListItemWrapper
                    key={id}
                    categoryChipsSlot={
                      categories &&
                      categories.length > 0 && (
                        <CategoryChips categories={categories} />
                      )
                    }
                    company={company}
                    productsPreviewGridSlot={
                      products &&
                      products.length > 0 && (
                        <ProductPreviewGrid
                          companyId={company.id}
                          products={products}
                          productsCount={_count?.products}
                        />
                      )
                    }
                    ratingSlot={
                      _count?.reviews &&
                      rating && (
                        <DetailRating
                          rating={rating}
                          ratingCount={_count.reviews}
                        />
                      )
                    }
                  />
                );
              })}
            </div>
          ) : (
            <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
              {companies.map((company) => {
                const { id, rating, categories } = company;

                return (
                  <CompanyGridItemWrapper
                    key={id}
                    categoryChipsSlot={
                      categories &&
                      categories.length > 0 && (
                        <CategoryChips categories={categories} />
                      )
                    }
                    company={company}
                    ratingSlot={rating && <Rating rating={rating} />}
                  />
                );
              })}
            </div>
          )}
        </div>
      </CategoryTemplate>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent className="xl:max-w-[575px] xl:pr-[152px] w-full">
          {(onClose) => (
            <>
              <DrawerHeader>
                <div className="w-full items-center flex flex-wrap gap-5 justify-between">
                  <h1 className="text-[25px] xl:text-[40px] font-semibold">
                    Фильтры
                  </h1>
                  <Button
                    variant="light"
                    className="!p-2 !text-base h-7 underline"
                  >
                    Сбросить все
                  </Button>
                </div>
              </DrawerHeader>
              <DrawerBody>
                <Card>
                  <CardHeader>
                    <div className="flex w-full items-center justify-between gap-5 flex-wrap">
                      <h3 className="text-base xl:text-2xl font-semibold">
                        Категория
                      </h3>
                      <Button
                        variant="light"
                        color="default"
                        className="!p-2 !text-base h-7 underline"
                      >
                        Сбросить все
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="h-[148px] overflow-y-auto">
                    <CheckboxGroup>
                      {categories.map(({ name, id }) => (
                        <Checkbox key={id} value={id.toString()}>
                          {name}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </CardBody>
                  <CardFooter />
                </Card>
              </DrawerBody>
              <DrawerFooter>
                <Button fullWidth color="primary" onPress={onClose}>
                  Применить фильтры
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

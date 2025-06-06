"use client";

import TCategory from "@/app/_types/Category";
import { BreadcrumbItemProps } from "@heroui/breadcrumbs";
import CategoryTemplate from "../../_components/CategoryTemplate";
import TCompany from "@/app/_types/Company";
import CompanyListItemWrapper from "./CompanyListItemWrapper";
import ProductPreviewGrid from "./ProductPreviewGrid";
import DetailRating from "./DetailRating";
import CategoryChips from "@/app/_components/CategoryChips";
import Button from "@/app/_components/ui/Button";
import CompanyGridItemWrapper from "./CompanyGridItemWrapper";
import Rating from "@/app/_components/shared/Rating";
import AppsIcon from "@/app/_components/icons/AppsIcon";
import ListIcon from "@/app/_components/icons/ListIcon";
import { useViewModeStore } from "@/app/_stores/viewModeStore";
import SlidersIcon from "@/app/_components/icons/SlidersIcon";
import PerpendicularArrows from "@/app/_components/icons/PerpendicularArrows";
import ArrowDown from "@/app/_components/icons/ArrowDown";
import { useDisclosure } from "@heroui/modal";
import {
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import Drawer from "@/app/_components/ui/Drawer";

type TCategoryProps = {
  category: TCategory;
  companies: TCompany[];
};

export default function Category({
  category: { id, name },
  companies,
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
      <CategoryTemplate title={name} breadcrumbItems={breadcrumbItems}>
        <div className="flex flex-col gap-5">
          <div className="flex items-center flex-wrap justify-between gap-5">
            <div className="flex flex-wrap gap-2">
              <Button
                onPress={onOpen}
                startContent={<SlidersIcon />}
                color="default"
              >
                Фильтры
              </Button>
              <Button
                color="default"
                startContent={<PerpendicularArrows />}
                endContent={<ArrowDown />}
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
                    company={company}
                    ratingSlot={
                      _count?.reviews &&
                      rating && (
                        <DetailRating
                          rating={rating}
                          ratingCount={_count.reviews}
                        />
                      )
                    }
                    categoryChipsSlot={
                      categories &&
                      categories.length > 0 && (
                        <CategoryChips categories={categories} />
                      )
                    }
                    productsPreviewGridSlot={
                      products &&
                      products.length > 0 && (
                        <ProductPreviewGrid
                          products={products}
                          companyId={company.id}
                          productsCount={_count?.products}
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
                    company={company}
                    ratingSlot={rating && <Rating rating={rating} />}
                    categoryChipsSlot={
                      categories &&
                      categories.length > 0 && (
                        <CategoryChips categories={categories} />
                      )
                    }
                  />
                );
              })}
            </div>
          )}
        </div>
      </CategoryTemplate>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader>
                <h1 className="text-[40px] font-semibold">Фильтры</h1>
              </DrawerHeader>
              <DrawerBody />
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

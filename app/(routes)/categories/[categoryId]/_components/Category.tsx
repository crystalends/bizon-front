"use client";

import { useState, useEffect } from "react";
import TCategory from "@/app/_types/Category";
import { BreadcrumbItemProps } from "@heroui/breadcrumbs";
import CategoryTemplate from "../../_components/CategoryTemplate";
import TCompany from "@/app/_types/Company";
import CompanyListItemWrapper from "./CompanyListItemWrapper";
import ProductPreviewsGrid from "./ProductPreviewsGrid";
import DetailRating from "./DetailRating";
import CategoryChips from "@/app/_components/CategoryChips";
import Button from "@/app/_components/ui/Button";
import CompanyGridItemWrapper from "./CompanyGridItemWrapper";
import Rating from "@/app/_components/shared/Rating";
import AppsIcon from "@/app/_components/icons/AppsIcon";
import ListIcon from "@/app/_components/icons/ListIcon";
import { useViewModeStore } from "@/app/_stores/viewModeStore";

type TCategoryProps = {
  category: TCategory;
  companies: TCompany[];
};

export default function Category({
  category: { id, name },
  companies,
}: TCategoryProps) {
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
    <CategoryTemplate title={name} breadcrumbItems={breadcrumbItems}>
      <div className="flex flex-col gap-5">
        <div className="flex justify-end gap-2">
          <Button variant="light" onPress={() => setViewMode("list")}>
            <ListIcon fill={viewMode == "list" ? "#1E3A8A" : "#D4D4D4"} />
          </Button>
          <Button variant="light" onPress={() => setViewMode("grid")}>
            <AppsIcon fill={viewMode == "grid" ? "#1E3A8A" : "#D4D4D4"} />
          </Button>
        </div>
        {viewMode === "list" ? (
          <div className="flex flex-col gap-5">
            {companies.map((company) => {
              const { _count, rating, categories, products } = company;

              return (
                <CompanyListItemWrapper
                  key={company.id}
                  company={company}
                  ratingSlot={
                    _count?.ratings && (
                      <DetailRating
                        rating={rating}
                        ratingCount={_count.ratings}
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
                      <ProductPreviewsGrid
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
              const { rating, categories } = company;

              return (
                <CompanyGridItemWrapper
                  key={company.id}
                  company={company}
                  ratingSlot={<Rating rating={rating} />}
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
  );
}

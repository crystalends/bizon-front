"use client";

import TCategory from "@/app/_types/Category";
import TRegion from "@/app/_types/Region";
import ProfileCard from "../../_components/ProfileCard";
import Label from "@/app/_components/ui/Label";
import Input from "@/app/_components/ui/Input";
import FormButton from "@/app/_components/ui/FormButton";
import Textarea from "@/app/_components/ui/Textarea";
import { useState } from "react";
import { SelectItem } from "@heroui/select";
import type { Selection } from "@react-types/shared";
import Select from "@/app/_components/ui/Select";
import Chip from "@/app/_components/ui/Chip";
import CategoryChips from "@/app/_components/CategoryChips";
import RegionChips from "@/app/_components/RegionChips";
import ImagePicker from "@/app/_components/ui/ImagePicker";

type TCompanyProps = {
  regions: TRegion[];
  categories: TCategory[];
  subCategories: TCategory[];
};

export default function Company({
  regions,
  categories,
  subCategories,
}: TCompanyProps) {
  const [categoryIds, setCategoryIds] = useState<Selection>(new Set([]));
  const [subCategoryIds, setSubCategoryIds] = useState<Selection>(new Set([]));
  const [regionIds, setRegionIds] = useState<Selection>(new Set([]));

  const filterSelected = <T extends { id: number }>(
    items: T[],
    selected: Selection,
  ) =>
    items.filter(
      (item) => selected instanceof Set && selected.has(String(item.id)),
    );

  const selectedCategories = filterSelected(categories, categoryIds);
  const selectedSubCategories = filterSelected(subCategories, subCategoryIds);
  const selectedRegions = filterSelected(regions, regionIds);

  const removeItem = (
    idToRemove: number,
    current: Selection,
    set: (v: Selection) => void,
  ) => {
    if (current instanceof Set) {
      const updated = new Set(current);
      updated.delete(String(idToRemove));
      set(updated);
    }
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row w-full gap-5">
      <div className="flex w-full flex-col gap-5">
        <ProfileCard title="Основная информация о компании">
          <div className="flex flex-col gap-3">
            <Label htmlFor="name">Название</Label>
            <Input id="name" placeholder="Название компании" />
            <Label htmlFor="description">Описание</Label>
            <Textarea id="description" placeholder="Описание компании" />
            <Label htmlFor="categories">Категории</Label>
            <Select
              selectionMode="multiple"
              placeholder="Выберите категории"
              items={categories}
              selectedKeys={categoryIds}
              onSelectionChange={setCategoryIds}
              aria-label="Категории"
            >
              {(item) => <SelectItem key={item.id}>{item.name}</SelectItem>}
            </Select>
            <CategoryChips
              categories={selectedCategories}
              onClose={({ id }) => removeItem(id, categoryIds, setCategoryIds)}
            />
            <Label htmlFor="subCategories">Подкатегории</Label>
            <Select
              selectionMode="multiple"
              placeholder="Выберите сабкатегории"
              items={subCategories}
              selectedKeys={subCategoryIds}
              onSelectionChange={setSubCategoryIds}
              aria-label="Сабкатегории"
            >
              {(item) => <SelectItem key={item.id}>{item.name}</SelectItem>}
            </Select>
            <CategoryChips
              categories={selectedSubCategories}
              onClose={({ id }) =>
                removeItem(id, subCategoryIds, setSubCategoryIds)
              }
            />
            <Label htmlFor="regions">Регионы</Label>
            <Select
              selectionMode="multiple"
              placeholder="Выберите регионы"
              items={regions}
              selectedKeys={regionIds}
              onSelectionChange={setRegionIds}
              aria-label="Регионы"
            >
              {(item) => <SelectItem key={item.id}>{item.name}</SelectItem>}
            </Select>
            <RegionChips
              regions={selectedRegions}
              onClose={({ id }) => removeItem(id, regionIds, setRegionIds)}
            />
            <FormButton className="w-fit">Сохранить</FormButton>
          </div>
        </ProfileCard>
        <ProfileCard title="Контактная информация">
          <div className="flex flex-col gap-3">
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" placeholder="Телефон" />
            <Label htmlFor="email">Почта</Label>
            <Input id="email" placeholder="Почта" />
            <FormButton className="w-fit">Сохранить</FormButton>
          </div>
        </ProfileCard>
        <ProfileCard title="Реквизиты компании">
          <div className="flex flex-col gap-3">
            <Label htmlFor="INN">ИНН</Label>
            <Input id="INN" placeholder="ИНН" />
            <Label htmlFor="KPP">КПП</Label>
            <Input id="KPP" placeholder="КПП" />
            <Label htmlFor="OGRN">ОГРН</Label>
            <Input id="OGRN" placeholder="ОГРН" />
            <FormButton className="w-fit">Сохранить</FormButton>
          </div>
        </ProfileCard>
      </div>
      <div className="xl:top-10 xl:sticky xl:h-fit xl:self-start flex justify-center">
        <ImagePicker />
      </div>
    </div>
  );
}

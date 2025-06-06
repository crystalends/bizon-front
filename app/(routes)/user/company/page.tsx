import Company from "./_components/Company";

import TCategory from "@/app/_types/Category";
import TRegion from "@/app/_types/Region";

export default function CompanyPage() {
  const regions: TRegion[] = [{ id: 1, name: "Москва" }];

  const categories: TCategory[] = [
    {
      id: 1,
      name: "Lorem ipsum",
    },
    {
      id: 2,
      name: "Example category",
    },
  ];

  const subCategories: TCategory[] = [
    {
      id: 3,
      parentId: 1,
      name: "Loretto domoretto",
    },
  ];

  return (
    <Company
      categories={categories}
      regions={regions}
      subCategories={subCategories}
    />
  );
}

import TCategory from "../_types/Category";
import Block from "./Block";
import PopularCategory from "./PopularCategory";

type TPopularCategoriesProps = {
  categories: TCategory[];
};

export default function PopularCategories({
  categories,
}: TPopularCategoriesProps) {
  return (
    <Block title="Популярные категории">
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] gap-4">
        {categories.map((category) => (
          <PopularCategory key={category.id} category={category} />
        ))}
      </div>
    </Block>
  );
}

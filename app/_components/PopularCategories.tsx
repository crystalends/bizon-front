import TCategory from "../_types/Category";
import Block from "./Block";
import PopularCategory from "./shared/PopularCategory";
import Container from "./shared/Container";
import Link from "next/link";

type TPopularCategoriesProps = {
  categories: TCategory[];
};

export default function PopularCategories({
  categories,
}: TPopularCategoriesProps) {
  return (
    <Container>
      <Block title="Популярные категории">
        <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] gap-5">
          {categories.map(({ id, name, image }) => (
            <PopularCategory
              key={id}
              name={name}
              imageProps={{ src: image }}
              cardProps={{
                isPressable: true,
                as: Link,
                href: `/categories/${id}`,
              }}
            />
          ))}
        </div>
      </Block>
    </Container>
  );
}

import TCategory from "../_types/Category";
import PopularCategory from "./shared/PopularCategory";
import Container from "./shared/Container";
import Link from "next/link";
import Block from "./shared/Block";

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
              isPressable
              as={Link}
              href={`/categories/${id}`}
            />
          ))}
        </div>
      </Block>
    </Container>
  );
}

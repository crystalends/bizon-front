import Block from "@/app/_components/Block";
import GlobalSearch from "@/app/_components/GlobalSearch";
import TCategory from "@/app/_types/Category";
import Category from "./Category";

type TCategoriesProps = {
  categories: TCategory[];
};

export default function Categories({ categories }: TCategoriesProps) {
  return (
    <Block title="Компании">
      <GlobalSearch
        inputProps={{
          classNames: {
            inputWrapper: "border border-primary",
          },
        }}
      />
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] gap-x-5">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </Block>
  );
}

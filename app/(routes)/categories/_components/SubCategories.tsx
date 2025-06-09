import Link from "@/app/_components/ui/Link";
import TCategory from "@/app/_types/Category";

type TSubCategoriesProps = {
  categories: TCategory[];
};

export default function SubCategories({ categories }: TSubCategoriesProps) {
  return (
    <div className="flex pl-[50px] pb-4 flex-col gap-3">
      {categories.map(({ id, name }) => (
        <Link key={id} href={`/categories/${id}`}>
          {name}
        </Link>
      ))}
    </div>
  );
}

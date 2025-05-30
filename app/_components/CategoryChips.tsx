import TCategory from "../_types/Category";
import CategoryChip from "./shared/CategoryChip";

type TCategoryChips = {
  categories: TCategory[];
};

export default function CategoryChips({ categories }: TCategoryChips) {
  return (
    <div className="flex flex-wrap gap-1">
      {categories.map(({ id, name }) => (
        <CategoryChip key={id} name={name} />
      ))}
    </div>
  );
}

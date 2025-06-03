import TCategory from "../_types/Category";
import Chip from "./ui/Chip";

type TCategoryChips = {
  categories: TCategory[];
};

export default function CategoryChips({ categories }: TCategoryChips) {
  return (
    <div className="flex flex-wrap gap-1">
      {categories.map(({ id, name }) => (
        <Chip key={id}>{name}</Chip>
      ))}
    </div>
  );
}

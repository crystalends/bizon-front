import TCategory from "../_types/Category";
import Chip from "./ui/Chip";

type TCategoryChips = {
  categories: TCategory[];
  onClose?: (category: TCategory) => void;
};

export default function CategoryChips({ categories, onClose }: TCategoryChips) {
  return (
    <div className="flex flex-wrap gap-1">
      {categories.map((category) => (
        <Chip
          key={category.id}
          onClose={onClose ? () => onClose(category) : undefined}
        >
          {category.name}
        </Chip>
      ))}
    </div>
  );
}

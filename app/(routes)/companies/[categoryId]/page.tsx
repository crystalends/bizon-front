import TCategory from "@/app/_types/Category";
import Category from "./_components/Category";

export default function CategoryPage() {
  const category: TCategory = {
    id: 1,
    name: "Строительство",
    image:
      "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
  };

  return <Category category={category} />;
}

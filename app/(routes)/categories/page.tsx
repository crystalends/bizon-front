import TCategory from "@/app/_types/Category";
import Categories from "./_components/Categories";

export default function CategoriesPage() {
  const categories: TCategory[] = [
    {
      id: 1,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
    },
    {
      id: 2,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
    },
    {
      id: 3,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
    },
    {
      id: 4,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
    },
    {
      id: 5,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
    },
    {
      id: 6,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
    },
    {
      id: 7,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
    },
  ];

  return <Categories categories={categories} />;
}

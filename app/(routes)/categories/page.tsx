import Categories from "./_components/Categories";

import TCategory from "@/app/_types/Category";

export default function CategoriesPage() {
  const categories: TCategory[] = [
    {
      id: 1,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
      childs: [
        {
          id: 24,
          name: "Строительное оборудование",
        },
        {
          id: 25,
          name: "Строительные материалы",
        },
        {
          id: 26,
          name: "Зелёное строительство и экоматериалы",
        },
        {
          id: 27,
          name: "Строительные услуги и подряд",
        },
        {
          id: 28,
          name: "Отделка и интерьер",
        },
      ],
    },
    {
      id: 2,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
      childs: [
        {
          id: 24,
          name: "Строительное оборудование",
        },
        {
          id: 25,
          name: "Строительные материалы",
        },
        {
          id: 26,
          name: "Зелёное строительство и экоматериалы",
        },
      ],
    },
    {
      id: 3,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
      childs: [
        {
          id: 24,
          name: "Строительное оборудование",
        },
        {
          id: 25,
          name: "Строительные материалы",
        },
        {
          id: 26,
          name: "Зелёное строительство и экоматериалы",
        },
      ],
    },
    {
      id: 4,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
      childs: [
        {
          id: 24,
          name: "Строительное оборудование",
        },
        {
          id: 25,
          name: "Строительные материалы",
        },
        {
          id: 26,
          name: "Зелёное строительство и экоматериалы",
        },
      ],
    },
    {
      id: 5,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
      childs: [
        {
          id: 24,
          name: "Строительное оборудование",
        },
        {
          id: 25,
          name: "Строительные материалы",
        },
        {
          id: 26,
          name: "Зелёное строительство и экоматериалы",
        },
      ],
    },
    {
      id: 6,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
      childs: [
        {
          id: 24,
          name: "Строительное оборудование",
        },
        {
          id: 25,
          name: "Строительные материалы",
        },
        {
          id: 26,
          name: "Зелёное строительство и экоматериалы",
        },
      ],
    },
    {
      id: 7,
      name: "Строительство",
      image:
        "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
      childs: [
        {
          id: 24,
          name: "Строительное оборудование",
        },
        {
          id: 25,
          name: "Строительные материалы",
        },
        {
          id: 26,
          name: "Зелёное строительство и экоматериалы",
        },
      ],
    },
  ];

  return <Categories categories={categories} />;
}

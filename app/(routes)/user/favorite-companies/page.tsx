import FavoriteCompanies from "./_components/FavoriteCompanies";

import TCompany from "@/app/_types/Company";

export default function FavoriteCompaniesPage() {
  const companies: TCompany[] = [
    {
      id: 3,
      name: "ЭкоСтрой",
      image:
        "https://png.pngtree.com/png-clipart/20240531/original/pngtree-colorful-square-logo-vector-picture-image_15482276.png",
      description:
        "Строительная компания, специализирующаяся на экологически чистых материалах и энергоэффективных технологиях.",
      rating: 4.7,
      categories: [
        {
          id: 1,
          name: "Строительство",
          image:
            "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
        },
        {
          id: 72,
          name: "Производство",
          image:
            "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
        },
      ],
      contactInformation: {
        phone: "+79255557575",
        email: "lorem@icloud.com",
        VK: "https://vk.com/",
        linkedIn: "https://ru.linkedin.com/",
        companyId: 3,
      },
      products: [
        {
          id: 1,
          name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
          image:
            "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
          price: 1234,
        },
        {
          id: 2,
          name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
          image:
            "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
          price: 1234,
        },
        {
          id: 3,
          name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
          image:
            "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
          price: 1234,
        },
        {
          id: 4,
          name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
          image:
            "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
          price: 1234,
        },
      ],
      isVerified: true,
      _count: {
        reviews: 182,
        products: 24,
      },
    },
    {
      id: 4,
      name: "СтройГарант",
      image:
        "https://png.pngtree.com/png-clipart/20240531/original/pngtree-colorful-square-logo-vector-picture-image_15482276.png",
      description:
        "Полный комплекс строительных услуг от проектирования до сдачи объекта под ключ.",
      rating: 4.6,
      categories: [
        {
          id: 1,
          name: "Строительство",
          image:
            "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
        },
        {
          id: 3,
          name: "Архитектура",
          image:
            "https://cdn-icons-png.flaSVGProps<SVGSVGElement>.com/512/2942/2942789.png",
        },
      ],
      products: [
        {
          id: 1,
          name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
          image:
            "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
          price: 1234,
        },
        {
          id: 2,
          name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima neque porro temporibus",
          image:
            "https://png.pngtree.com/png-clipart/20231019/original/pngtree-square-3d-podium-for-product-display-png-image_13360771.png",
          price: 1234,
        },
      ],
      contactInformation: {
        phone: "+74957894561",
        email: "info@stroigarant.ru",
        site: "https://stroigarant.ru",
        companyId: 4,
      },
      isVerified: true,
      _count: {
        reviews: 156,
        products: 2,
      },
    },
    {
      id: 5,
      name: "ФундаментПро",
      image:
        "https://png.pngtree.com/png-clipart/20240531/original/pngtree-colorful-square-logo-vector-picture-image_15482276.png",
      description:
        "Специалисты по возведению надежных фундаментов любой сложности.",
      rating: 4.5,
      categories: [
        {
          id: 1,
          name: "Строительство",
          image:
            "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
        },
        {
          id: 7,
          name: "Инженерные работы",
          image:
            "https://cdn-icons-png.flaSVGProps<SVGSVGElement>.com/512/3279/3279013.png",
        },
      ],
      contactInformation: {
        phone: "+79261234567",
        email: "contact@fundamentpro.ru",
        VK: "https://vk.com/fundamentpro",
        companyId: 5,
      },
      isVerified: false,
      _count: {
        reviews: 89,
      },
    },
    {
      id: 6,
      name: "КровляМастер",
      image:
        "https://png.pngtree.com/png-clipart/20240531/original/pngtree-colorful-square-logo-vector-picture-image_15482276.png",
      description:
        "Профессиональный монтаж и ремонт кровельных покрытий всех типов.",
      rating: 4.7,
      categories: [
        {
          id: 1,
          name: "Строительство",
          image:
            "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
        },
        {
          id: 9,
          name: "Ремонт",
          image:
            "https://cdn-icons-png.flaSVGProps<SVGSVGElement>.com/512/3063/3063179.png",
        },
      ],
      contactInformation: {
        phone: "+78003334567",
        email: "krovlya@master.ru",
        companyId: 6,
      },
      isVerified: true,
      _count: {
        reviews: 112,
      },
    },
  ];

  return <FavoriteCompanies companies={companies} />;
}

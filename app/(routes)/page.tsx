import FeaturedCompanies from "../_components/FeaturedCompanies";
import Home from "../_components/Home";
import PopularCategories from "../_components/PopularCategories";
import TCategory from "../_types/Category";
import TCompany from "../_types/Company";

export default function HomePage() {
  const popularCategories: TCategory[] = [
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
  ];

  const featuredCompanies: TCompany[] = [
    {
      id: 1,
      name: "ООО «Смарт Хит»",
      description:
        "Продажа кабельных систем электрического обогрева - теплые полы, саморегулируемые кабели, наружный обогрев, терморегуляторы и автоматика.",
      rating: 5,
      isVerified: true,
    },
    {
      id: 2,
      name: "ТехноЛаб",
      description:
        "Разработка и производство инновационных технологических решений для промышленности и бытового использования.",
      rating: 4.8,
      isVerified: true,
    },
    {
      id: 3,
      name: "ЭкоСтрой",
      description:
        "Строительная компания, специализирующаяся на экологически чистых материалах и энергоэффективных технологиях.",
      rating: 4.7,
      isVerified: true,
    },
    {
      id: 4,
      name: "IT Решения",
      description:
        "Разработка программного обеспечения и комплексных IT-решений для бизнеса любого масштаба.",
      rating: 4.9,
      isVerified: true,
    },
    {
      id: 5,
      name: "МедТехника+",
      description:
        "Продажа и обслуживание медицинского оборудования для клиник и частных практик.",
      rating: 4.6,
      isVerified: true,
    },
    {
      id: 6,
      name: "АвтоПрофи",
      description:
        "Сеть автосервисов, предлагающая полный спектр услуг по ремонту и обслуживанию автомобилей.",
      rating: 4.5,
      isVerified: true,
    },
    {
      id: 7,
      name: "Бытовые Системы",
      description:
        "Установка и обслуживание систем умного дома, безопасности и климат-контроля.",
      rating: 4.4,
      isVerified: true,
    },
    {
      id: 8,
      name: "ФармаГрупп",
      description:
        "Оптовые поставки фармацевтической продукции в аптеки и медицинские учреждения.",
      rating: 4.3,
      isVerified: true,
    },
    {
      id: 9,
      name: "СтройМастер",
      description:
        "Ремонтно-строительные работы под ключ для частных и коммерческих объектов.",
      rating: 4.2,
      isVerified: true,
    },
    {
      id: 10,
      name: "ТелекомСервис",
      description:
        "Провайдер интернет-услуг и телефонии для бизнеса и частных клиентов.",
      rating: 4.1,
      isVerified: true,
    },
    {
      id: 11,
      name: "ПромИнвест",
      description:
        "Финансовые услуги и инвестиционные решения для промышленных предприятий.",
      rating: 4.0,
      isVerified: true,
    },
    {
      id: 12,
      name: "АгроТех",
      description:
        "Сельскохозяйственная техника и оборудование для фермерских хозяйств.",
      rating: 4.7,
      isVerified: true,
    },
    {
      id: 13,
      name: "Логистик Групп",
      description:
        "Комплексные логистические решения и грузоперевозки по всей стране.",
      rating: 4.6,
      isVerified: true,
    },
    {
      id: 14,
      name: "Окна Профи",
      description:
        "Производство и установка пластиковых и деревянных оконных конструкций.",
      rating: 4.5,
      isVerified: true,
    },
  ];

  return (
    <Home
      featuredCompaniesSlot={
        <FeaturedCompanies companies={featuredCompanies} />
      }
      popularCategoriesSlot={
        <PopularCategories categories={popularCategories} />
      }
    />
  );
}

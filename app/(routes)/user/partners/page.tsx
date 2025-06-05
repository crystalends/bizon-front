import TPartnerOrder from "@/app/_types/PartnerOrder";
import PartnerOrders from "./_components/PartnerOrders";

export default function PartnersPage() {
  const partnerOrders: TPartnerOrder[] = [
    {
      id: 1,
      product: "Разработка корпоративного сайта",
      userId: 101,
      user: {
        id: 101,
        name: "Александр Петров",
        image: "/users/101.jpg",
        companyId: 201,
        company: {
          id: 201,
          name: "ВебСтудия ПРО",
          description: "Профессиональная разработка сайтов и веб-приложений",
          image: "/companies/201.jpg",
          rating: 4.8,
          isVerified: true,
          _count: {
            reviews: 24,
            products: 15,
          },
          categories: [
            { id: 1, name: "Веб-разработка" },
            { id: 2, name: "Дизайн" },
          ],
          products: [
            { id: 301, name: "Лендинг" },
            { id: 302, name: "Интернет-магазин" },
          ],
          regions: [
            { id: 1, name: "Москва" },
            { id: 2, name: "Санкт-Петербург" },
          ],
          details: {
            id: 132,
            INN: 1234567890,
            OGRN: 1122334455667,
            companyId: 201,
          },
          contactInformation: {
            phone: "+7 (495) 123-45-67",
            email: "info@webstudio-pro.ru",
            site: "webstudio-pro.ru",
            companyId: 201,
          },
        },
      },
      executors: [
        {
          id: 102,
          name: "Ирина Смирнова",
          image: "/users/102.jpg",
          companyId: 202,
          company: {
            id: 202,
            name: "ДизайнСфера",
            description: "Креативный дизайн и брендинг",
            image: "/companies/202.jpg",
            rating: 4.6,
            isVerified: true,
            _count: {
              reviews: 18,
              products: 9,
            },
            categories: [
              { id: 2, name: "Дизайн" },
              { id: 3, name: "Брендинг" },
            ],
            products: [
              { id: 303, name: "Логотип" },
              { id: 304, name: "Фирменный стиль" },
            ],
            regions: [{ id: 1, name: "Москва" }],
          },
        },
      ],
      createdAt: new Date("2023-10-15T10:00:00"),
      updatedAt: new Date("2023-10-16T11:30:00"),
    },
    {
      id: 2,
      product: "Разработка мобильного приложения",
      userId: 103,
      user: {
        id: 103,
        name: "Дмитрий Волков",
        image: "/users/103.jpg",
        companyId: 203,
        company: {
          id: 203,
          name: "МобайлДев",
          description: "Разработка мобильных приложений для iOS и Android",
          image: "/companies/203.jpg",
          rating: 4.9,
          isVerified: true,
          _count: {
            reviews: 32,
            products: 12,
          },
          categories: [{ id: 4, name: "Мобильная разработка" }],
          products: [
            { id: 305, name: "Приложение для iOS" },
            { id: 306, name: "Приложение для Android" },
          ],
          regions: [
            { id: 2, name: "Санкт-Петербург" },
            { id: 3, name: "Новосибирск" },
          ],
        },
      },
      executors: [
        {
          id: 104,
          name: "Анна Козлова",
          image: "/users/104.jpg",
          companyId: 204,
          company: {
            id: 204,
            name: "АйТиСервис",
            description: "Комплексные IT-решения",
            image: "/companies/204.jpg",
            rating: 4.7,
            isVerified: false,
            _count: {
              reviews: 15,
              products: 7,
            },
            categories: [
              { id: 1, name: "Веб-разработка" },
              { id: 4, name: "Мобильная разработка" },
            ],
            products: [
              { id: 307, name: "Корпоративный портал" },
              { id: 308, name: "Мобильное приложение" },
            ],
            regions: [
              { id: 1, name: "Москва" },
              { id: 4, name: "Екатеринбург" },
            ],
          },
        },
        {
          id: 105,
          name: "Сергей Новиков",
          image: "/users/105.jpg",
          companyId: 205,
          company: {
            id: 205,
            name: "СофтТех",
            description: "Разработка программного обеспечения",
            image: "/companies/205.jpg",
            rating: 4.5,
            isVerified: true,
            _count: {
              reviews: 21,
              products: 10,
            },
            categories: [{ id: 5, name: "Программное обеспечение" }],
            products: [
              { id: 309, name: "CRM система" },
              { id: 310, name: "ERP решение" },
            ],
            regions: [{ id: 5, name: "Казань" }],
          },
        },
      ],
      createdAt: new Date("2023-10-17T09:15:00"),
      updatedAt: new Date("2023-10-18T14:20:00"),
    },
    {
      id: 3,
      product: "Дизайн упаковки",
      userId: 106,
      user: {
        id: 106,
        name: "Елена Соколова",
        image: "/users/106.jpg",
        companyId: 206,
        company: {
          id: 206,
          name: "ПакДизайн",
          description: "Дизайн упаковки и полиграфия",
          image: "/companies/206.jpg",
          rating: 4.3,
          isVerified: true,
          _count: {
            reviews: 12,
            products: 8,
          },
          categories: [
            { id: 6, name: "Полиграфия" },
            { id: 7, name: "Упаковка" },
          ],
          products: [
            { id: 311, name: "Дизайн этикетки" },
            { id: 312, name: "Фирменная упаковка" },
          ],
          regions: [{ id: 6, name: "Нижний Новгород" }],
        },
      },
      executors: [
        {
          id: 107,
          name: "Артем Белов",
          image: "/users/107.jpg",
          companyId: 207,
          company: {
            id: 207,
            name: "КреативАгентство",
            description: "Полный цикл дизайнерских услуг",
            image: "/companies/207.jpg",
            rating: 4.4,
            isVerified: false,
            _count: {
              reviews: 9,
              products: 6,
            },
            categories: [
              { id: 2, name: "Дизайн" },
              { id: 6, name: "Полиграфия" },
            ],
            products: [
              { id: 313, name: "Брендбук" },
              { id: 314, name: "Рекламный макет" },
            ],
            regions: [{ id: 7, name: "Ростов-на-Дону" }],
          },
        },
      ],
      createdAt: new Date("2023-10-20T11:45:00"),
      updatedAt: new Date("2023-10-21T16:30:00"),
    },
    {
      id: 4,
      product: "SEO продвижение",
      userId: 108,
      user: {
        id: 108,
        name: "Ольга Морозова",
        image: "/users/108.jpg",
        companyId: 208,
        company: {
          id: 208,
          name: "ТОППоиск",
          description: "Продвижение сайтов в поисковых системах",
          image: "/companies/208.jpg",
          rating: 4.7,
          isVerified: true,
          _count: {
            reviews: 27,
            products: 5,
          },
          categories: [
            { id: 8, name: "SEO" },
            { id: 9, name: "Интернет-маркетинг" },
          ],
          products: [
            { id: 315, name: "SEO-аудит" },
            { id: 316, name: "Комплексное продвижение" },
          ],
          regions: [
            { id: 1, name: "Москва" },
            { id: 8, name: "Краснодар" },
          ],
        },
      },
      executors: [
        {
          id: 109,
          name: "Павел Громов",
          image: "/users/109.jpg",
          companyId: 209,
          company: {
            id: 209,
            name: "МаркетингГуру",
            description: "Эффективные маркетинговые решения",
            image: "/companies/209.jpg",
            rating: 4.8,
            isVerified: true,
            _count: {
              reviews: 19,
              products: 8,
            },
            categories: [{ id: 9, name: "Интернет-маркетинг" }],
            products: [
              { id: 317, name: "Контекстная реклама" },
              { id: 318, name: "SMM продвижение" },
            ],
            regions: [{ id: 9, name: "Самара" }],
          },
        },
        {
          id: 110,
          name: "Наталья Ветрова",
          image: "/users/110.jpg",
          companyId: 210,
          company: {
            id: 210,
            name: "ВебПромо",
            description: "Комплексное продвижение бизнеса в интернете",
            image: "/companies/210.jpg",
            rating: 4.6,
            isVerified: false,
            _count: {
              reviews: 14,
              products: 7,
            },
            categories: [
              { id: 8, name: "SEO" },
              { id: 9, name: "Интернет-маркетинг" },
            ],
            products: [
              { id: 319, name: "SEO-оптимизация" },
              { id: 320, name: "Таргетированная реклама" },
            ],
            regions: [{ id: 10, name: "Воронеж" }],
          },
        },
      ],
      createdAt: new Date("2023-10-22T13:20:00"),
      updatedAt: new Date("2023-10-23T17:45:00"),
    },
  ];

  return <PartnerOrders partnerOrders={partnerOrders} />;
}

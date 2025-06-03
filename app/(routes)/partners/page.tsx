import TPartner from "@/app/_types/Partner";
import Partners from "./_components/Partners";

export default function PartnersPage() {
  const partners: TPartner[] = [
    {
      id: 1,
      userId: 1,
      product: "Перевозка крупногабаритных товаров",
      user: {
        id: 1,
        name: "Владимир Иванов",
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      userId: 2,
      product: "Строительство недвижемости",
      user: {
        id: 2,
        name: "Андрей Алексеев",
        companyId: 2,
        company: {
          id: 2,
          name: "ИП Алексеев А.В.",
          rating: 5,
          regions: [
            {
              id: 1,
              name: "Москва",
            },
            {
              id: 2,
              name: "Электроугли",
            },
          ],
          isVerified: false,
        },
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return <Partners partners={partners} />;
}

import MyRequests from "./_components/MyRequests";

import TRequest from "@/app/_types/Request";

export default function MyRequestsPage() {
  const requests: TRequest[] = [
    {
      id: 1,
      userId: 1,
      product: "Перевозка крупногабаритных товаров",
      user: {
        id: 1,
        name: "Владимир Иванов",
      },
      region: { id: 1, name: "Москва" },
      customers: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      userId: 2,
      product: "Строительство недвижемости",
      region: { id: 1, name: "Москва" },
      user: {
        id: 2,
        name: "Андрей Алексеев",
        companyId: 2,
        company: {
          id: 2,
          name: "ИП Алексеев А.В.",
          rating: 5,
          isVerified: false,
        },
      },
      customers: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return <MyRequests requests={requests} />;
}

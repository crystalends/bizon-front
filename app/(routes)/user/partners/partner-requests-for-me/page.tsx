import PartnerRequestsForMe from "./_components/PartnerRequestsForMe";

import TPartnerRequest from "@/app/_types/PartnerRequest";

export default function PartnerRequestsForMePage() {
  const partnerRequests: TPartnerRequest[] = [
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
      customers: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return <PartnerRequestsForMe partnerRequests={partnerRequests} />;
}

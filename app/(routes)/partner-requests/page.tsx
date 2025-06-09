import TRegion from "@/app/_types/Region";
import PartnerRequests from "./_components/PartnerRequests";

import TPartnerRequest from "@/app/_types/PartnerRequest";

export default function PartnerRequestsPage() {
  const regions: TRegion[] = [
    {
      id: 1,
      name: "Москва",
    },
    {
      id: 2,
      name: "Краснодар",
    },
  ];

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
          isVerified: false,
        },
      },
      customers: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <PartnerRequests partnerRequests={partnerRequests} regions={regions} />
  );
}

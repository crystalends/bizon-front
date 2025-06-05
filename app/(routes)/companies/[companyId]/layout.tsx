import TCompany from "@/app/_types/Company";
import Company from "./_components/Company";
import { ReactNode } from "react";

type TCompanyLayoutProps = {
  children: ReactNode;
};

export default function CompanyLayout({ children }: TCompanyLayoutProps) {
  const company: TCompany = {
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
    details: {
      id: 1,
      INN: 121213421312312,
      KPP: 212321321312,
      companyId: 6,
    },
    regions: [
      {
        id: 1,
        name: "Москва",
      },
    ],
    isVerified: true,
    _count: {
      reviews: 112,
    },
  };

  return <Company company={company}>{children}</Company>;
}

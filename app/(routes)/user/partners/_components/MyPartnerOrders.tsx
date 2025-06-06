import { format } from "date-fns/format";

import Partner from "@/app/_components/shared/Partner";
import Link from "@/app/_components/ui/Link";
import TPartnerOrder from "@/app/_types/PartnerOrder";

type TMyPartnerOrdersProps = { partnerOrders: TPartnerOrder[] };

export default function MyPartnerOrders({
  partnerOrders,
}: TMyPartnerOrdersProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerOrders.map(({ id, product, user, createdAt }) => (
        <Partner
          key={id}
          createdAt={format(createdAt, "dd.MM.yyyy")}
          middleContent={
            user && (
              <Link
                color="primary"
                href={`/companies/${user.companyId}`}
                underline="always"
              >
                Перейти в профиль компании
              </Link>
            )
          }
          product={product}
          renderSearcher={(searcher) => (
            <p className="text-xl">Компания: {searcher}</p>
          )}
          searcher={user?.company?.name}
        />
      ))}
    </div>
  );
}

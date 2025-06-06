import { format } from "date-fns";

import Partner from "@/app/_components/shared/Partner";
import TPartnerRequest from "@/app/_types/PartnerRequest";

type TMyPartnerRequestsProps = { partnerRequests: TPartnerRequest[] };

export default function MyPartnerRequests({
  partnerRequests,
}: TMyPartnerRequestsProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerRequests.map(({ id, product, createdAt }) => (
        <Partner
          key={id}
          createdAt={format(createdAt, "dd.MM.yyyy")}
          product={product}
        />
      ))}
    </div>
  );
}

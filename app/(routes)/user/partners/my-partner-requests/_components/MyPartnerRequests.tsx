import Partner from "@/app/_components/shared/Partner";
import TPartnerRequest from "@/app/_types/PartnerRequest";
import { format } from "date-fns";

type TMyPartnerRequestsProps = { partnerRequests: TPartnerRequest[] };

export default function MyPartnerRequests({
  partnerRequests,
}: TMyPartnerRequestsProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerRequests.map(({ id, product, createdAt }) => (
        <Partner
          key={id}
          product={product}
          createdAt={format(createdAt, "dd.MM.yyyy")}
        />
      ))}
    </div>
  );
}

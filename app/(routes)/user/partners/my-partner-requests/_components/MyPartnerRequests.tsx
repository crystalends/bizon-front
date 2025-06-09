import { format } from "date-fns";

import Partner from "@/app/_components/shared/Partner";
import TPartnerRequest from "@/app/_types/PartnerRequest";
import Actions from "./Actions";
import RegionChips from "@/app/_components/RegionChips";

type TMyPartnerRequestsProps = { partnerRequests: TPartnerRequest[] };

export default function MyPartnerRequests({
  partnerRequests,
}: TMyPartnerRequestsProps) {
  return (
    <div className="flex flex-col gap-5">
      {partnerRequests.map(({ id, product, region, createdAt }) => (
        <Partner
          key={id}
          createdAt={format(createdAt, "dd.MM.yyyy")}
          product={product}
          middleContent={region && <RegionChips regions={[region]} />}
          rightContent={
            <div className="flex xl:max-w-[355px] w-full flex-col gap-5">
              <Actions />
              <p>Откликнулось: 15</p>
            </div>
          }
        />
      ))}
    </div>
  );
}

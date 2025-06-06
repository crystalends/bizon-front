import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

import ContactInformation from "@/app/_components/shared/ContactInformation";

type TContactInfrmationCardProps = {
  contactInformation: TContactInformation;
};

export default function ContactInfrmationCard({
  contactInformation: { phone, email, site, VK, linkedIn },
}: TContactInfrmationCardProps) {
  return (
    <Card className="bg-gray-50 p-5" shadow="none">
      <CardBody>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Контактная информация:</h3>
          <Divider />
          <ContactInformation
            VK={VK}
            email={email}
            linkedIn={linkedIn}
            phone={phone}
            site={site}
          />
        </div>
      </CardBody>
    </Card>
  );
}

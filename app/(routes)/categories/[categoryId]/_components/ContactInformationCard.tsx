import ContactInformation from "@/app/_components/shared/ContactInformation";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

type TContactInfrmationCardProps = {
  contactInformation: TContactInformation;
};

export default function ContactInfrmationCard({
  contactInformation: { phone, email, site, VK, linkedIn, geo },
}: TContactInfrmationCardProps) {
  return (
    <Card shadow="none" className="bg-gray-50 p-5">
      <CardBody>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold">Контактная информация:</h3>
          <Divider />
          <ContactInformation
            phone={phone}
            email={email}
            site={site}
            VK={VK}
            linkedIn={linkedIn}
            geo={geo}
          />
        </div>
      </CardBody>
    </Card>
  );
}

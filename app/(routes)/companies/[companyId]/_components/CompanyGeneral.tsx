import TCompany from "@/app/_types/Company";
import { Image } from "@heroui/image";
import { Card, CardBody } from "@heroui/card";
import CategoryChips from "@/app/_components/CategoryChips";
import RegionChips from "@/app/_components/RegionChips";
import ContactInformation from "@/app/_components/shared/ContactInformation";
import Details from "@/app/_components/shared/Details";
import DetailIsVerified from "@/app/_components/DetailIsVerified";
type TCompanyGeneralProps = { company: TCompany };

export default function CompanyGeneral({
  company: {
    name,
    description,
    categories,
    regions,
    image,
    details,
    isVerified,
    contactInformation,
  },
}: TCompanyGeneralProps) {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col xl:flex-row gap-5">
        {image && (
          <div className="xl:min-w-[375] h-fit flex justify-center shadow-sm rounded-lg">
            <Image src={image} width={375} />
          </div>
        )}
        <div className="flex w-full flex-col gap-5">
          <Card shadow="md">
            <CardBody>
              <div className="flex flex-col gap-5">
                {isVerified && <DetailIsVerified />}
                <h1 className="text-[40px] font-semibold">{name}</h1>
                <p>{description}</p>
              </div>
            </CardBody>
          </Card>
          {categories && categories.length > 0 && (
            <Card shadow="md">
              <CardBody>
                <div className="flex flex-col gap-5">
                  <h1 className="text-2xl font-semibold">
                    Отрасли деятельности
                  </h1>
                  <CategoryChips categories={categories} />
                </div>
              </CardBody>
            </Card>
          )}
          {regions && regions.length > 0 && (
            <Card shadow="md">
              <CardBody>
                <div className="flex flex-col gap-5">
                  <h1 className="text-2xl font-semibold">Регионы работы</h1>
                  <RegionChips regions={regions} />
                </div>
              </CardBody>
            </Card>
          )}
          {details && (
            <Card shadow="md">
              <CardBody>
                <div className="flex flex-col gap-5">
                  <h1 className="text-2xl font-semibold">Реквизиты</h1>
                  <Details
                    INN={details.INN}
                    KPP={details.KPP}
                    OGRN={details.OGRN}
                  />
                </div>
              </CardBody>
            </Card>
          )}
          {contactInformation && (
            <Card shadow="md">
              <CardBody>
                <div className="flex flex-col gap-5">
                  <h1 className="text-2xl font-semibold">
                    Контактная информация
                  </h1>
                  <ContactInformation
                    VK={contactInformation.VK}
                    linkedIn={contactInformation.linkedIn}
                    email={contactInformation.email}
                    phone={contactInformation.phone}
                    site={contactInformation.site}
                  />
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

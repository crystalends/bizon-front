import { Link } from "@heroui/link";
import TCompany from "../_types/Company";
import Block from "./Block";
import FeaturedCompany from "./FeaturedCompany";
import Button from "./ui/Button";
import { ScrollShadow } from "@heroui/scroll-shadow";

type TFeaturedCompanies = {
  companies: TCompany[];
};

export default function FeaturedCompanies({ companies }: TFeaturedCompanies) {
  return (
    <Block title="Избранные компании">
      <ScrollShadow orientation="horizontal" className="p-1">
        <div className="flex gap-4 w-max">
          {companies.map((company) => (
            <div key={company.id} className="flex-[0_0_auto] w-[507px]">
              <FeaturedCompany
                company={company}
                endContent={
                  <Button as={Link} href={`/companies/${company.id}`}>
                    Перейти
                  </Button>
                }
              />
            </div>
          ))}
        </div>
      </ScrollShadow>
    </Block>
  );
}

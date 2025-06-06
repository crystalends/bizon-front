import { Link } from "@heroui/link";
import TCompany from "../_types/Company";
import FeaturedCompany from "./shared/FeaturedCompany";
import Button from "./ui/Button";
import { ScrollShadow } from "@heroui/scroll-shadow";
import Container from "./shared/Container";
import Rating from "./shared/Rating";
import Block from "./shared/Block";

type TFeaturedCompanies = {
  companies: TCompany[];
};

export default function FeaturedCompanies({ companies }: TFeaturedCompanies) {
  return (
    <Container>
      <Block title="Избранные компании">
        <ScrollShadow orientation="horizontal" className="py-4">
          <div className="flex gap-4 w-max">
            {companies.map(({ id, name, description, rating }) => (
              <div key={id} className="flex-[0_0_auto] w-[507px]">
                <FeaturedCompany
                  name={name}
                  description={description}
                  ratingSlot={rating && <Rating rating={rating} />}
                  endContent={
                    <Button as={Link} href={`/companies/${id}`}>
                      Перейти
                    </Button>
                  }
                />
              </div>
            ))}
          </div>
        </ScrollShadow>
      </Block>
    </Container>
  );
}

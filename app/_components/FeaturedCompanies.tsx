import { Link } from "@heroui/link";
import { ScrollShadow } from "@heroui/scroll-shadow";
import TCompany from "../_types/Company";
import FeaturedCompany from "./shared/FeaturedCompany";
import Button from "./ui/Button";
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
        <ScrollShadow className="py-4" orientation="horizontal">
          <div className="flex gap-4 w-max">
            {companies.map(({ id, name, description, rating }) => (
              <FeaturedCompany
                key={id}
                className="w-[506px]"
                description={description}
                endContent={
                  <Button className="w-fit" as={Link} href={`/companies/${id}`}>
                    Перейти
                  </Button>
                }
                name={name}
                ratingSlot={rating && <Rating rating={rating} />}
              />
            ))}
          </div>
        </ScrollShadow>
      </Block>
    </Container>
  );
}

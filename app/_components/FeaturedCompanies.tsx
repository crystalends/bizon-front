"use client";

import { Link } from "@heroui/link";
import TCompany from "../_types/Company";
import Block from "./Block";
import FeaturedCompany from "./FeaturedCompany";
import Button from "./ui/Button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type TFeaturedCompanies = {
  companies: TCompany[];
};

export default function FeaturedCompanies({ companies }: TFeaturedCompanies) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay()],
  );

  return (
    <Block title="Избранные компании">
      <div className="embla overflow-hidden py-1">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {companies.map((company) => (
              <div
                key={company.id}
                className="embla__slide flex-[0_0_80%] min-w-0 pl-4 md:flex-[0_0_40%] lg:flex-[0_0_30%]"
              >
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
        </div>
      </div>
    </Block>
  );
}

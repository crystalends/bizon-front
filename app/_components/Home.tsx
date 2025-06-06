import { ReactNode } from "react";

import Teaser from "./Teaser";
import Promo from "./Promo";
import About from "./About";
import Advantages from "./Advantages";

type THomeProps = {
  popularCategoriesSlot: ReactNode;
  featuredCompaniesSlot: ReactNode;
};

export default function Home({
  popularCategoriesSlot,
  featuredCompaniesSlot,
}: THomeProps) {
  return (
    <div className="flex flex-col gap-8 xl:gap-16">
      <Teaser />
      {popularCategoriesSlot}
      {featuredCompaniesSlot}
      <Promo />
      <About />
      <Advantages />
    </div>
  );
}

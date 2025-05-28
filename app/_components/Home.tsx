import { ReactNode } from "react";
import Teaser from "./Teaser";
import Promo from "./Promo";
import About from "./About";
import Advantages from "./Advantages";

type THomeProps = {
  popularCategories: ReactNode;
  featuredCompanies: ReactNode;
};

export default function Home({
  popularCategories,
  featuredCompanies,
}: THomeProps) {
  return (
    <div className="flex flex-col gap-8 xl:gap-16">
      <Teaser />
      {popularCategories}
      {featuredCompanies}
      <Promo />
      <About />
      <Advantages />
    </div>
  );
}

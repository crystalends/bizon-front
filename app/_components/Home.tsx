import { ReactNode } from "react";
import Teaser from "./Teaser";
import Promo from "./Promo";

type THomeProps = {
  popularCategories: ReactNode;
  featuredCompanies: ReactNode;
};

export default function Home({
  popularCategories,
  featuredCompanies,
}: THomeProps) {
  return (
    <>
      <Teaser />
      {popularCategories}
      {featuredCompanies}
      <Promo />
    </>
  );
}

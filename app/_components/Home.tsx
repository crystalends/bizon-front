import { ReactNode } from "react";
import Teaser from "./Teaser";

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
    </>
  );
}

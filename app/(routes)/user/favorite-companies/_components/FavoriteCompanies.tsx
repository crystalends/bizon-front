import CategoryChips from "@/app/_components/CategoryChips";
import Block from "@/app/_components/shared/Block";
import CompanyGridItem from "@/app/_components/shared/CompanyGridItem";
import Rating from "@/app/_components/shared/Rating";
import Link from "@/app/_components/ui/Link";
import TCompany from "@/app/_types/Company";

type TFavoriteCompaniesProps = {
  companies: TCompany[];
};

export default function FavoriteCompanies({
  companies,
}: TFavoriteCompaniesProps) {
  return (
    <Block title="Избранные компании">
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
        {companies.map(
          ({
            id,
            name,
            rating,
            description,
            image,
            isVerified,
            categories,
          }) => {
            return (
              <CompanyGridItem
                key={id}
                name={name}
                renderName={(name) => (
                  <Link href={`/companies/${id}`}>
                    <h2 className="text-[32px] font-semibold">{name}</h2>
                  </Link>
                )}
                imageProps={{
                  src: image,
                }}
                description={description}
                isVerified={isVerified}
                ratingSlot={rating && <Rating rating={rating} />}
                categoryChipsSlot={
                  categories &&
                  categories.length > 0 && (
                    <CategoryChips categories={categories} />
                  )
                }
              />
            );
          },
        )}
      </div>
    </Block>
  );
}

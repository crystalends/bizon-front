import CategoryChips from "@/app/_components/CategoryChips";
import FilledHeartIcon from "@/app/_components/icons/FilledHeartIcon";
import CompanyGridItem from "@/app/_components/shared/CompanyGridItem";
import Rating from "@/app/_components/shared/Rating";
import SubBlock from "@/app/_components/shared/SubBlock";
import Button from "@/app/_components/ui/Button";
import Link from "@/app/_components/ui/Link";
import TCompany from "@/app/_types/Company";

type TFavoriteCompaniesProps = {
  companies: TCompany[];
};

export default function FavoriteCompanies({
  companies,
}: TFavoriteCompaniesProps) {
  return (
    <SubBlock title="Избранные компании">
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
                categoryChipsSlot={
                  categories &&
                  categories.length > 0 && (
                    <CategoryChips categories={categories} />
                  )
                }
                topRightContent={
                  <Button isIconOnly variant="light">
                    <FilledHeartIcon />
                  </Button>
                }
                description={description}
                imageProps={{
                  src: image,
                }}
                isVerified={isVerified}
                name={name}
                ratingSlot={rating && <Rating rating={rating} />}
                renderName={(name) => (
                  <Link href={`/companies/${id}`}>
                    <h2 className="text-[32px] font-semibold">{name}</h2>
                  </Link>
                )}
              />
            );
          },
        )}
      </div>
    </SubBlock>
  );
}

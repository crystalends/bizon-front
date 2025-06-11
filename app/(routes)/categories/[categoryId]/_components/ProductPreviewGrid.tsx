import ProductPreview from "@/app/_components/shared/ProductPreview";
import Link from "@/app/_components/ui/Link";
import TProduct from "@/app/_types/Product";

type TProductPreviewGridProps = {
  companyId: number;
  products: TProduct[];
  productsCount?: number;
};

export default function ProductPreviewGrid({
  companyId,
  products,
  productsCount,
}: TProductPreviewGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(112px,1fr))] gap-5">
      {products.map(({ id, name, image }) => (
        <ProductPreview
          key={id}
          imageProps={{
            src: image,
          }}
          name={name}
        />
      ))}
      {productsCount && productsCount > 4 && (
        <Link
          color="primary"
          href={`/companies/${companyId}/products`}
          underline="always"
        >
          Смотреть все
        </Link>
      )}
    </div>
  );
}

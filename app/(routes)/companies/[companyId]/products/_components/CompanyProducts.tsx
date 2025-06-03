import Block from "@/app/_components/shared/Block";
import Product from "@/app/_components/shared/Product";
import TProduct from "@/app/_types/Product";

type TCompanyProductsProps = { products: TProduct[] };

export default function CompanyProducts({ products }: TCompanyProductsProps) {
  return (
    <Block title="Товары и услуги">
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(243px,1fr))] gap-5">
        {products.map(({ id, name, image, price }) => (
          <Product
            key={id}
            name={name}
            imageProps={{
              src: image,
            }}
            price={price}
          />
        ))}
      </div>
    </Block>
  );
}

import Block from "@/app/_components/shared/Block";
import Product from "@/app/_components/shared/Product";
import Button from "@/app/_components/ui/Button";
import TProduct from "@/app/_types/Product";

type TProductsProps = {
  products: TProduct[];
};

export default function Products({ products }: TProductsProps) {
  return (
    <Block
      className="w-full"
      title="Товары и услуги"
      rightContent={<Button>Добавить</Button>}
    >
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

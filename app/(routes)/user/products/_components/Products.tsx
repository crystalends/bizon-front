import CloseIcon from "@/app/_components/icons/CloseIcon";
import Product from "@/app/_components/shared/Product";
import SubBlock from "@/app/_components/shared/SubBlock";
import Button from "@/app/_components/ui/Button";
import TProduct from "@/app/_types/Product";

type TProductsProps = {
  products: TProduct[];
};

export default function Products({ products }: TProductsProps) {
  return (
    <SubBlock
      className="w-full"
      rightContent={<Button>Добавить</Button>}
      title="Товары и услуги"
    >
      <div className="grid sm:grid-cols-[repeat(auto-fill,minmax(243px,1fr))] gap-5">
        {products.map(({ id, name, image, price }) => (
          <Product
            key={id}
            imageProps={{
              src: image,
            }}
            name={name}
            price={price}
            topRightContent={
              <Button isIconOnly variant="light">
                <CloseIcon />
              </Button>
            }
          />
        ))}
      </div>
    </SubBlock>
  );
}

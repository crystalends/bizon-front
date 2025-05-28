import { Card, CardBody, CardHeader } from "@heroui/card";
import TCategory from "../_types/Category";
import { Image } from "@heroui/image";
import Link from "next/link";

type TPopularCategory = {
  category: TCategory;
};

export default function PopularCategory({ category }: TPopularCategory) {
  return (
    <Card
      isPressable
      as={Link}
      href={`/companies/${category.id}`}
      shadow="none"
      className="bg-gray-50"
    >
      <CardHeader className="px-[32px] pt-8">
        <h3 className="text-[32px] font-semibold">{category.name}</h3>
      </CardHeader>
      <CardBody className="p-0">
        <div className="flex justify-end">
          <Image alt={category.name} height={317} src={category.image} />
        </div>
      </CardBody>
    </Card>
  );
}

import TCategory from "@/app/_types/Category";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

type TCategoryProps = {
  category: TCategory;
};

export default function Category({
  category: { name, image },
}: TCategoryProps) {
  return (
    <Card shadow="none" isPressable className="hover:bg-gray-50">
      <CardBody className="py-3 px-5">
        <div className="flex items-center gap-5 justify-between">
          <div className="flex items-center gap-2">
            <Image src={image} width={22} height={22} alt={name} />
            <h3 className="font-semibold text-xl">{name}</h3>
          </div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.78322 6L4 11.2965L4.98489 12L9.27061 6L4.98489 0L4 0.703496L7.78322 6Z"
              fill="#2F3742"
            />
          </svg>
        </div>
      </CardBody>
    </Card>
  );
}

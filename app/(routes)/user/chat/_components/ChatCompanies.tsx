import { ComponentPropsWithoutRef } from "react";
import TCompany from "../../../../_types/Company";
import ChatCompany from "../../../../_components/shared/ChatCompany";
import Link from "next/link";

type TChatCompaniesProps = {
  companies: TCompany[];
} & ComponentPropsWithoutRef<"div">;

export default function ChatCompanies({
  companies,
  ...props
}: TChatCompaniesProps) {
  return (
    <div
      className="flex flex-col shadow-md rounded-lg xl:max-w-[375px] w-full overflow-hidden"
      {...props}
    >
      {companies.map(({ id, name, image }) => (
        <ChatCompany
          key={id}
          as={Link}
          href={`/user/chat/${id}`}
          className="hover:bg-gray-50"
          isPressable
          name={name}
          imageProps={{
            src: image,
          }}
          isOnline
        />
      ))}
    </div>
  );
}

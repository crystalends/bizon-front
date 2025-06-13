import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

import TCompany from "../../../../_types/Company";
import ChatCompany from "../../../../_components/shared/ChatCompany";

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
          isOnline
          isPressable
          as={Link}
          className="hover:bg-gray-50"
          href={`/user/chat/${id}`}
          imageProps={{
            src: image,
          }}
          name={name}
        />
      ))}
    </div>
  );
}

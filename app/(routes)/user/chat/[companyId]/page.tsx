import TChatMessage from "@/app/_types/ChatMessage";
import ChatMessages from "./_components/ChatWithCompany";
import TCompany from "@/app/_types/Company";
import ChatCompany from "@/app/_components/shared/ChatCompany";
import Link from "next/link";

export default function ChatMessagesPage() {
  const company: TCompany = {
    id: 5,
    name: "ФундаментПро",
    image:
      "https://png.pngtree.com/png-clipart/20240531/original/pngtree-colorful-square-logo-vector-picture-image_15482276.png",
    description:
      "Специалисты по возведению надежных фундаментов любой сложности.",
    rating: 4.5,
    categories: [
      {
        id: 1,
        name: "Строительство",
        image:
          "https://i.pinimg.com/originals/fd/f6/f3/fdf6f360e0a82cf110c237ab371ac0bc.png",
      },
      {
        id: 7,
        name: "Инженерные работы",
        image:
          "https://cdn-icons-png.flaSVGProps<SVGSVGElement>.com/512/3279/3279013.png",
      },
    ],
    contactInformation: {
      phone: "+79261234567",
      email: "contact@fundamentpro.ru",
      VK: "https://vk.com/fundamentpro",
      companyId: 5,
    },
    isVerified: false,
    _count: {
      reviews: 89,
    },
  };

  const chatMessages: TChatMessage[] = [
    {
      id: 1,
      value: "Привет",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      value: "И тебе привет",
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return (
    <ChatMessages
      chatCompanySlot={
        <ChatCompany
          name={company.name}
          imageProps={{ src: company.image }}
          isOnline
          isPressable
          as={Link}
          href={`/companies/${company.id}`}
        />
      }
      chatMessages={chatMessages}
    />
  );
}

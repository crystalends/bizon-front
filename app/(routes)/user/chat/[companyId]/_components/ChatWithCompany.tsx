import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";
import { ReactNode } from "react";

import AddImageIcon from "@/app/_components/icons/AddImageIcon";
import PaperPlaneIcon from "@/app/_components/icons/PaperPlaneIcon";
import Button from "@/app/_components/ui/Button";
import TChatMessage from "@/app/_types/ChatMessage";

type TChatMessagesProps = {
  chatCompanySlot: ReactNode;
  chatMessages: TChatMessage[];
};

export default function ChatMessages({
  chatCompanySlot,
  chatMessages,
}: TChatMessagesProps) {
  return (
    <div className="flex flex-col shadow-md rounded-lg w-full overflow-hidden">
      {chatCompanySlot}
      <Divider />
      <div className="flex-1 overflow-y-auto px-4 py-2" />
      <Divider />
      <div className="flex items-center px-4 py-2 gap-3">
        <Button isIconOnly variant="light">
          <AddImageIcon />
        </Button>
        <Input
          fullWidth
          classNames={{
            inputWrapper: "!bg-transparent shadow-none",
            base: "!bg-transparent shadow-none",
          }}
          placeholder="Напишите сообщение"
        />
        <Button isIconOnly variant="light">
          <PaperPlaneIcon />
        </Button>
      </div>
    </div>
  );
}

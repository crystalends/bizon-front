import { Card, CardBody, CardHeader } from "@heroui/card";
import { ReactNode } from "react";

type TProfileCardProps = {
  title: string;
  children: ReactNode;
};

export default function ProfileCard({ title, children }: TProfileCardProps) {
  return (
    <Card fullWidth shadow="md">
      <CardHeader>
        <h2 className="text-[32px] font-semibold">{title}</h2>
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
}

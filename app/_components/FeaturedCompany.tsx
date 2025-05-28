import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import TCompany from "../_types/Company";
import { ReactNode } from "react";

type TFeaturedCompany = {
  company: TCompany;
  endContent?: ReactNode;
};

export default function FeaturedCompany({
  company,
  endContent,
}: TFeaturedCompany) {
  return (
    <Card shadow="sm" className="p-10">
      <CardHeader>
        <div className="flex w-full justify-between gap-5">
          <h3 className="font-semibold text-2xl">{company.name}</h3>
          <div className="flex items-center gap-1">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.5L12.2451 7.40983H19.5106L13.6327 11.6803L15.8779 18.5902L10 14.3197L4.12215 18.5902L6.36729 11.6803L0.489435 7.40983H7.75486L10 0.5Z"
                fill="#1E3A8A"
              />
            </svg>
            <span className="text-primary">{company.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <p>{company.description}</p>
      </CardBody>
      {endContent && <CardFooter>{endContent}</CardFooter>}
    </Card>
  );
}

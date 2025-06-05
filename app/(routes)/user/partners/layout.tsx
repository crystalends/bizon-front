import { ReactNode } from "react";
import Partners from "./_components/Partners";

type TPartnersLayoutProps = {
  children: ReactNode;
};

export default function PartnersLayout({ children }: TPartnersLayoutProps) {
  return <Partners>{children}</Partners>;
}

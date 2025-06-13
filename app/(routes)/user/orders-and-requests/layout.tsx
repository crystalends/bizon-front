import { ReactNode } from "react";

import RequestsAndOrders from "./_components/RequestsAndOrders";

type TPartnersLayoutProps = {
  children: ReactNode;
};

export default function PartnersLayout({ children }: TPartnersLayoutProps) {
  return <RequestsAndOrders>{children}</RequestsAndOrders>;
}

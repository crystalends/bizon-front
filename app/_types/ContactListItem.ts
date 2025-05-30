import { ReactNode } from "react";

type TContactListItem = {
  icon: ReactNode;
  value?: string | null;
  href: string | null;
};

export default TContactListItem;

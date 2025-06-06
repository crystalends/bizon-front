import { ReactNode } from "react";

import Restore from "./_components/Restore";

type TRestoreLayoutProps = {
  children: ReactNode;
};

export default function RestoreLayout({ children }: TRestoreLayoutProps) {
  return <Restore>{children}</Restore>;
}

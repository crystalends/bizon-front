import { ReactNode } from "react";
import User from "./_components/User";

type TUserLayoutProps = {
  children: ReactNode;
};

export default function UserLayout({ children }: TUserLayoutProps) {
  return <User>{children}</User>;
}

import { ReactNode } from "react";

import Login from "./_components/Login";

type TLoginLayoutProps = {
  children: ReactNode;
};

export default function LoginLayout({ children }: TLoginLayoutProps) {
  return <Login>{children}</Login>;
}

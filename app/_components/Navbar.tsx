"use client";

import {
  Navbar as HeroUINavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import Logo from "./Logo";
import { VariantProps } from "@heroui/theme";
import Link from "./ui/Link";
import Button from "./ui/Button";
import { Divider } from "@heroui/divider";

export default function Navbar() {
  const links: VariantProps<typeof Link>[] = [
    {
      children: "Компании",
      href: "/companies",
    },
    {
      children: "Поиск партнера",
      href: "/partners",
    },
    {
      children: "Центр помощи",
      href: "/help",
    },
  ];

  return (
    <div className="bg-white shadow-sm">
      <HeroUINavBar
        height={88}
        isBlurred={false}
        maxWidth="full"
        className="max-w-[1560px] w-full bg-white mx-auto"
      >
        <NavbarContent>
          <NavbarBrand>
            <Link color="primary" href="/">
              <Logo />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="gap-10" justify="end">
          {links.map((link) => (
            <NavbarItem key={link.href}>
              <Link {...link} />
            </NavbarItem>
          ))}
          <div className="h-12 flex items-center">
            <Divider orientation="vertical" />
          </div>
          <NavbarItem>
            <Link className="text-xl" href="/login">
              Войти
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="/register">
              Зарегистрироваться
            </Button>
          </NavbarItem>
        </NavbarContent>
      </HeroUINavBar>
    </div>
  );
}

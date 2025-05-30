"use client";

import {
  Navbar as HeroUINavBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarItemProps,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuItemProps,
  NavbarMenuToggle,
} from "@heroui/navbar";
import Logo from "./Logo";
import Link from "./ui/Link";
import Button from "./ui/Button";
import { Divider } from "@heroui/divider";

export default function Navbar() {
  const navbarItems: NavbarItemProps[] = [
    {
      key: 1,
      children: <Link href="/categories">Категории</Link>,
    },
    {
      key: 2,
      children: <Link href="/partners">Поиск партнера</Link>,
    },
    {
      key: 3,
      children: <Link href="/help">Центр помощи</Link>,
    },
    {
      key: 4,
      children: (
        <div className="h-12 flex items-center">
          <Divider orientation="vertical" />
        </div>
      ),
    },
    {
      key: 5,
      children: (
        <Link className="text-xl" href="/login">
          Войти
        </Link>
      ),
    },
    {
      key: 6,
      children: (
        <Button as={Link} href="/register">
          Зарегистрироваться
        </Button>
      ),
    },
  ];

  const navbarMenuItems: NavbarMenuItemProps[] = [
    {
      key: 1,
      children: <Link href="/categories">Категории</Link>,
    },
    {
      key: 2,
      children: <Link href="/partners">Поиск партнера</Link>,
    },
    {
      key: 3,
      children: <Link href="/help">Центр помощи</Link>,
    },
    {
      key: 4,
      children: <Link href="/login">Войти</Link>,
    },
    {
      key: 5,
      children: (
        <Link color="primary" href="/register">
          Зарегистрироваться
        </Link>
      ),
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
        <NavbarContent className="gap-10 hidden xl:flex" justify="end">
          {navbarItems.map(({ key, ...navbarItem }) => (
            <NavbarItem key={key} {...navbarItem} />
          ))}
        </NavbarContent>
        <NavbarContent className="xl:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarMenu>
          {navbarMenuItems.map(({ key, ...navbarMenuItem }) => (
            <NavbarMenuItem key={key} {...navbarMenuItem} />
          ))}
        </NavbarMenu>
      </HeroUINavBar>
    </div>
  );
}

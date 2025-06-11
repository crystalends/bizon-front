import { LinkProps } from "@heroui/link";
import { contacts, externalLinks } from "../_config/constants";
import Logo from "./Logo";
import Container from "./shared/Container";
import Link from "./ui/Link";
import VKIcon from "./icons/VKIcon";
import IsArtIcon from "./icons/IsArtIcon";

export default function Footer() {
  const links: LinkProps[] = [
    { children: "Категории", href: "/categories" },
    {
      children: "Поиск партнера",
      href: "/partner-requests",
    },
    {
      children: "Центр помощи",
      href: "/help",
    },
    {
      children: "Блог",
      href: "/blog",
    },
  ];

  return (
    <div className="bg-gray-50 pt-16 pb-4">
      <Container>
        <div className="flex flex-col gap-14">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex gap-5">
              <Link color="primary" href="/">
                <Logo />
              </Link>
              <Link color="primary" href={externalLinks.bizonVK}>
                <VKIcon height={32} width={32} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-10">
              {links.map((link) => (
                <Link key={link.href} {...link} />
              ))}
            </div>
            <div>
              <p>
                По всем вопросам:{" "}
                <Link
                  className="font-medium text-xl"
                  href={`mailto:${contacts.email}`}
                >
                  {contacts.email}
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5 justify-between">
            <div className="flex flex-wrap gap-10">
              <p className="text-gray-300">© 2025 BizON</p>
              <Link className="text-gray-300" href="/privacy-policy">
                Политика конфиденциальности
              </Link>
            </div>
            <Link href={externalLinks.isArt}>
              <IsArtIcon />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

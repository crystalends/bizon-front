import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

import EmailIcon from "../icons/EmailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import SiteIcon from "../icons/SiteIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import VKIcon from "../icons/VKIcon";
import Link from "../ui/Link";

import TContactListItem from "@/app/_types/ContactListItem";
import TContactGridItem from "@/app/_types/ContactGridItem";

type TContactInformationProps = {
  phone: string;
  email: string;
  site?: string | null;
  VK?: string | null;
  linkedIn?: string | null;
} & ComponentPropsWithoutRef<"div">;

export default function ContactInformation({
  phone,
  email,
  site,
  VK,
  linkedIn,
  className,
  ...props
}: TContactInformationProps) {
  const contactList: TContactListItem[] = [
    {
      icon: <PhoneIcon className="text-gray-600" />,
      value: phone,
      href: phone ? `tel:${phone.replace(/\D/g, "")}` : null,
    },
    {
      icon: <EmailIcon className="text-gray-600" />,
      value: email,
      href: email ? `mailto:${email}` : null,
    },
    {
      icon: <SiteIcon className="text-gray-600" />,
      value: site,
      href: site ? (site.startsWith("http") ? site : `https://${site}`) : null,
    },
  ].filter((contact) => contact.value);

  const contactGrid: TContactGridItem[] = [
    {
      icon: (
        <LinkedInIcon className="w-6 h-6 text-gray-600 hover:text-blue-700" />
      ),
      href: linkedIn
        ? linkedIn.startsWith("http")
          ? linkedIn
          : `https://linkedin.com/in/${linkedIn}`
        : null,
    },
    {
      icon: <VKIcon className="w-6 h-6 text-gray-600 hover:text-blue-500" />,
      href: VK ? (VK.startsWith("http") ? VK : `https://vk.com/${VK}`) : null,
    },
  ].filter((contact) => contact.href);

  return (
    <div className={clsx("flex flex-col gap-5", className)} {...props}>
      {contactList.map(({ icon, value, href }) => (
        <div
          key={`${value}-${href}`}
          className="flex gap-2 items-center flex-wrap"
        >
          {icon}
          {href ? (
            <Link className="font-normal" href={href}>
              {value}
            </Link>
          ) : (
            <span className="text-gray-800">{value}</span>
          )}
        </div>
      ))}
      {contactGrid.length > 0 && (
        <div className="flex gap-4 flex-wrap items-center">
          {contactGrid.map(({ icon, href }) => (
            <Link key={href} href={href!}>
              {icon}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

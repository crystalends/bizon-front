import TContactGridItem from "../_types/ContactGridItem";
import TContactListItem from "../_types/ContactListItem";
import EmailIcon from "./icons/EmailIcon";
import GeoIcon from "./icons/GeoIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import PhoneIcon from "./icons/PhoneIcon";
import SiteIcon from "./icons/SiteIcon";
import VKIcon from "./icons/VKIcon";
import Link from "./ui/Link";

type TContactInformationProps = {
  phone?: string | null;
  email?: string | null;
  site?: string | null;
  geo?: string | null;
  VK?: string | null;
  linkedIn?: string | null;
  className?: string;
};

export default function ContactInformation({
  phone,
  email,
  site,
  geo,
  VK,
  linkedIn,
  className = "",
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
    {
      icon: <GeoIcon />,
      value: geo,
      href: null,
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
    <div className={`flex flex-col gap-5 ${className}`}>
      {contactList.map(({ icon, value, href }) => (
        <div
          key={`${value}-${href}`}
          className="flex gap-2 items-center flex-wrap"
        >
          {icon}
          {href ? (
            <Link href={href}>{value}</Link>
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

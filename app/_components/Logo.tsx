import { siteConfig } from "@/config/site";

export default function Logo() {
  return <h2 className="text-[32px] font-bold">{siteConfig.name}</h2>;
}

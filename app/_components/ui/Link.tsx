import { Link as HeroUILink, LinkProps } from "@heroui/link";

type TLinkProps = LinkProps;

export default function Link(props: TLinkProps) {
  return <HeroUILink color="foreground" {...props} />;
}

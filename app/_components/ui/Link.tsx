import { Link as HeroUILink } from "@heroui/link";
import { VariantProps } from "@heroui/theme";

type TLinkProps = VariantProps<typeof HeroUILink> &
  React.HTMLAttributes<HTMLLinkElement>;

export default function Link(props: TLinkProps) {
  return <HeroUILink color="foreground" {...props} />;
}

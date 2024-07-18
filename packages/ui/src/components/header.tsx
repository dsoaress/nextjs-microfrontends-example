import { A, Link } from "./link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export interface HeaderProps {
  variant: "default" | "route-planning";
  user: {
    name: string;
    avatarUrl: string;
  };
}

const defaultLinks = [
  {
    label: "Gerenciamento de Pedidos",
    href: "/",
    external: false,
  },
  {
    label: "Planejamento de rotas",
    href: "/route-planning",
    external: true,
  },
  {
    label: "Rastreamento e visibilidade",
    href: "/tracking-and-visibility",
    external: false,
  },
];

const routePlanningLinks = [
  {
    label: "Gerenciamento de Pedidos",
    href: "/",
    external: true,
  },
  {
    label: "Planejamento de rotas",
    href: "/route-planning",
    external: false,
  },
  {
    label: "Rastreamento e visibilidade",
    href: "/tracking-and-visibility",
    external: true,
  },
];

const RouteLink = ({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external: boolean;
}) => {
  return (
    <li>
      {external ? (
        <A href={href}>{label}</A>
      ) : (
        <Link
          href={href}
          className="transition-colors no-underline text-link hover:text-link-light"
        >
          {label}
        </Link>
      )}
    </li>
  );
};

const Header = ({ user, variant }: HeaderProps) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <header className="container mx-auto py-8 border-b-neutral-400 border-b">
      <nav className="flex justify-between items-center">
        <h1>Example Microfrontends</h1>
        <ul className="flex gap-4 justify-between items-center">
          {variant === "default"
            ? defaultLinks.map((link) => <RouteLink key={link.href} {...link} />)
            : routePlanningLinks.map((link) => <RouteLink key={link.href} {...link} />)}
        </ul>
        <Avatar>
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  );
};

Header.displayName = "Header";

export { Header };

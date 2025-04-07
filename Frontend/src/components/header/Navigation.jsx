import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";

/**
 * Display the main navigation bar
 * @returns {JSX.Element} The navigation bar with multiple links
 */
const Navigation = () => {
  const { pathname } = useLocation();
  const getProfileHref = (pathname) => (pathname.startsWith("/user") ? pathname : "/user/12");

  const navLinks = [
    { label: "Accueil", href: "/accueil" },
    { label: "Profil", href: getProfileHref(pathname) },
    { label: "Réglage", href: "/reglage" },
    { label: "Communauté", href: "/communaute" },
  ];

  return (
    <nav className="h-6 w-full max-w-[994px]">
      <ul className="flex size-6 flex-row text-lg font-medium sm:gap-28 lg:gap-32 xl:gap-52">
        {navLinks.map((link) => (
          <NavItem key={link.href} label={link.label} href={link.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

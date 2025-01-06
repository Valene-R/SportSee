import NavItem from "./NavItem";

/**
 * Create the main navigation bar
 * @returns {JSX.Element} The navigation bar with multiple links
 */
const Navigation = () => {
  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Profil", href: "/profil" },
    { label: "Réglage", href: "/reglage" },
    { label: "Communauté", href: "/communaute" },
  ];

  return (
    <nav className="h-6 w-full max-w-[994px]">
      <ul className="flex size-6 flex-row justify-between space-x-8 text-lg font-medium sm:gap-10 lg:gap-36 xl:gap-44">
        {navLinks.map((link, index) => (
          <NavItem key={index} label={link.label} href={link.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

import Logo from "./Logo";
import Navigation from "./Navigation";

/**
 * Display the header of the application
 * @returns {JSX.Element} The application header with logo and Navigation
 */
const Header = () => {
  return (
    <header className="flex h-[91px] w-full items-center justify-between bg-black pl-7 pr-16 text-white drop-shadow-custom sm:gap-24 lg:gap-44">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;

import Logo from "./Logo";
import Navigation from "./Navigation";

/**
 * Create the header of the application
 * @returns {JSX.Element} The application header with logo and Navigation
 */
const Header = () => {
  return (
    <header className="flex h-[91px] items-center justify-between bg-black pl-7 pr-[91] text-white drop-shadow-custom">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;

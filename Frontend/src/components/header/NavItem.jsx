import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * Display a navigation item with automatic active detection
 * @param {Object} props Component properties
 * @param {string} props.label The text of the navigation item
 * @param {string} props.href The URL the navigation item points to
 * @returns {JSX.Element} The navigation item
 */
const NavItem = ({ label, href }) => {
  return (
    <li className="h-4 cursor-pointer lg:text-lg xl:text-xl">
      <NavLink to={href} className={({ isActive }) => (isActive ? "font-bold text-red-500" : "text-white hover:text-red-500")}>
        {label}
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavItem;

import PropTypes from "prop-types";

/**
 * Create a navigation item
 * @param {Object} props Component properties
 * @param {string} props.label The text of the navigation item
 * @param {string} props.href The URL the navigation item points to
 * @returns {JSX.Element} The navigation item
 */
const NavItem = ({ label, href }) => {
  return (
    <li className="h-4 cursor-pointer hover:text-red-500 lg:text-lg xl:text-xl">
      <a href={href}>{label}</a>
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavItem;

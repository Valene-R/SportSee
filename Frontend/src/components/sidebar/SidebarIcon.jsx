import PropTypes from "prop-types";

/**
 * Display a button with an icon
 * @param {Object} props Component properties
 * @param {string} props.icon The source of the icon image
 * @param {string} props.altText Alternative text for the icon
 * @param {function} [props.onClick] Optional click handler
 * @returns {JSX.Element} The sidebar icon button
 */
const SidebarIcon = ({ icon, altText, onClick }) => {
  return (
    <button className="flex size-16 items-center justify-center rounded shadow hover:scale-110" onClick={onClick} aria-label={altText}>
      <img src={icon} alt={altText} />
    </button>
  );
};

SidebarIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SidebarIcon;

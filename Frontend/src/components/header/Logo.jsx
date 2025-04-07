import PropTypes from "prop-types";
import logoSrc from "../../assets/logo-app.png";

/**
 * Display the logo as a clickable link
 * @param {Object} props Component properties
 * @param {string} [props.size="w-44 h-16"] Tailwind CSS classes for size
 * @param {string} [props.altText="SportSee Logo"] Alternative text for the logo image
 * @returns {JSX.Element} The logo as a clickable link
 */
const Logo = ({ size = "w-44 h-16", altText = "SportSee Logo" }) => {
  return (
    <div className="flex items-center space-x-2">
      <img src={logoSrc} alt={altText} className={`${size} my-[18px] object-contain`} />
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.string,
  altText: PropTypes.string,
};

export default Logo;

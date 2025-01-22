import PropTypes from "prop-types";

/**
 * Display a card with an icon, a value, and a label
 * Used in the dashboard to present key nutritional data
 * @param {Object} props Component properties
 * @param {JSX.Element} props.icon The icon to display
 * @param {string} props.value The main value (e.g. "1,930kCal")
 * @param {string} props.label The label describing the value
 * @param {string} props.bgColor The background color of the icon contain
 * @returns {JSX.Element} The KeyDataCard component
 */
const KeyDataCard = ({ icon, value, label, bgColor }) => {
  return (
    <div className="bg-customLightGray flex h-[124px] max-w-[258px] items-center gap-6 rounded-[5px] p-6 xl:w-full">
      {/* Icon container with background color */}
      <div className={`flex h-[60px] w-[60px] items-center justify-center rounded-md`} style={{ backgroundColor: bgColor }}>
        {icon}
      </div>

      {/* Value and label */}
      <div>
        <p className="font-bold xl:text-xl">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
};

KeyDataCard.propTypes = {
  icon: PropTypes.element.isRequired, // Icon component (JSX)
  value: PropTypes.string.isRequired, // Displayed value
  label: PropTypes.string.isRequired, // Descriptive label
  bgColor: PropTypes.string.isRequired, // Background color for the icon container
};

export default KeyDataCard;

import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

/**
 * Adjust tick position dynamically based on `payload.value`
 * @param {Object} props Tick properties from Recharts
 * @param {Object} props.payload Data for the tick (contains `value`)
 * @param {number} props.x X position of the tick
 * @param {number} props.y Y position of the tick
 * @param {string} props.textAnchor Text alignment
 * @returns {JSX.Element} Customized text element
 */
const CustomPerformanceTick = ({ payload, x, y, textAnchor }) => {
  let dy = 0;
  if (payload.value === "Intensité") dy = -8; // Move up
  if (payload.value === "Endurance") dy = 10; // Move down

  return (
    <text x={x} y={y} dy={dy} textAnchor={textAnchor} fill="#FFF" fontSize={12}>
      {payload.value}
    </text>
  );
};

CustomPerformanceTick.propTypes = {
  payload: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  textAnchor: PropTypes.string.isRequired,
};

/**
 * Display the user's performance as a RadarChart
 * @param {Object[]} data The performance data to be displayed
 * @param {string} data[].kind The type of performance metric (e.g. "Cardio", "Force")
 * @param {number} data[].value The corresponding value for the performance metric
 * @returns {JSX.Element} A responsive radar chart displaying user performance
 */
const PerformanceChart = ({ data }) => {
  return (
    <div className="relative flex h-[263px] w-full max-w-[258px] rounded-lg bg-[#282D30]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="65%" data={data}>
          {/* Hexagonal grid for visualization */}
          <PolarGrid radialLines={false} />

          {/* Labels for performance categories */}
          <PolarAngleAxis dataKey="kind" tick={CustomPerformanceTick} />

          {/* Performance zone */}
          <Radar name="Performance" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PerformanceChart;

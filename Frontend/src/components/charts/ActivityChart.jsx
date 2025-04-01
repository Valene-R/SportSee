import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

/**
 * Custom tooltip for the activity chart
 * For displaying activity details when hovering over bars
 * @param {Object} props Tooltip properties provided by Recharts
 * @param {boolean} props.active Indicate if the tooltip should be displayed
 * @param {Array} props.payload The data related to the hovered bar
 * @returns {JSX.Element|null} The formatted tooltip or null if inactive
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="left-1/2 ml-[80px] flex h-16 w-10 -translate-x-1/2 -translate-y-[110%] flex-col justify-between bg-[#E60000] p-2 text-center text-[7px] text-white">
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

/**
 * ActivityChart component displaying a barchart of daily activity
 * @param {Object} props The properties passed to the component
 * @param {Array} props.data The user's activity data
 * @returns {JSX.Element} The barchart component
 */
const ActivityChart = ({ data }) => {
  return (
    <div className="h-[320px] w-full rounded-lg bg-customLightGray py-5 lg:min-w-[720px] lg:px-4 xl:w-[835px] xl:px-8">
      {/* Title + legends */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium text-black">Activité quotidienne</h2>
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          {/* Weight legend */}
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-gray-800"></span>
            Poids (kg)
          </div>
          {/* Calories burned legend */}
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-3 inline-block h-2 w-2 rounded-full bg-[#E60000]"></span>
            Calories brûlées (kCal)
          </div>
        </div>
      </div>

      {/* BarChart container */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} barGap={8} barCategoryGap="10%" margin={{ top: 20, right: 10, left: -38, bottom: 20 }}>
          {/* Grid with dashed lines */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} width="100%" height={145} />

          {/* X-axis displaying days */}
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#DEDEDE", strokeWidth: 2 }}
            tick={{ fontSize: 14, fill: "#9B9EAC", dy: 12 }}
            padding={{ right: -45 }}
          />

          {/* Y-axis for weight (kg) positioned to the right */}
          <YAxis
            yAxisId="kg"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: "#9B9EAC" }}
            tickCount={3} // Ensure only three values displayed
            dx={40}
          />

          {/* Y-axis for calories, hidden */}
          <YAxis yAxisId="cal" orientation="left" hide />

          {/* Custom tooltip for hover effect */}
          <Tooltip content={<CustomTooltip />} />

          {/* Disable default Recharts legend */}
          <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{ display: "none" }} />

          {/* Bars representing activity data */}
          <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" barSize={7} radius={[5, 5, 0, 0]} />
          <Bar yAxisId="cal" dataKey="calories" fill="#E60000" barSize={7} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Accept both string and number
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ActivityChart;

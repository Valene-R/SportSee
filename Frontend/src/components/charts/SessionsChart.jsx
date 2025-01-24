import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from "recharts";

/**
 * Custom Tooltip for displaying sessions duration
 * @param {Object} props Tooltip properties
 * @param {boolean} props.active Indicate if tooltip is active
 * @param {Array} props.payload Tooltip data
 * @returns {JSX.Element|null} Tooltip content
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <div className="rounded bg-white px-2 py-1 text-xs font-medium text-black shadow-lg">{`${payload[0].value} min`}</div>;
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

/**
 * Custom Cursor to apply a dark background effect on hover
 * @param {Object} props Cursor properties
 * @param {Array} props.points Cursor position points
 * @param {number} props.chartHeight Height of the chart
 * @param {number} props.width Width of the chart
 * @returns {JSX.Element|null} Cursor effect
 */
const CustomCursor = ({ points, chartHeight, width }) => {
  if (!points || points.length === 0) return null;

  const { x } = points[0]; /// X position of the hovered point

  return (
    <rect
      x={x} // Adjust X position for centering the effect
      y={0} // Start at the top of the chart
      width={width} // Cover the right side dynamically
      height={chartHeight} // Use full chart height
      fill="rgba(0, 0, 0, 0.2)" // Transparent dark overlay effect
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.array,
  chartHeight: PropTypes.number.isRequired,
  width: PropTypes.number,
};

/**
 * SessionsChart : LineChart component displaying average sessions duration
 * @param {Object} props Chart properties
 * @param {Array} props.data Formatted session data
 * @returns {JSX.Element} Rendered LineChart component
 */
const SessionsChart = ({ data }) => {
  return (
    <div className="relative h-[263px] w-full max-w-[258px] overflow-hidden rounded-lg bg-[#FF0000]">
      <h2 className="absolute z-10 ml-7 h-14 w-full max-w-[148px] pt-8 text-sm font-medium text-white opacity-[0.5]">Durée moyenne des sessions</h2>

      {/* Responsive container for adaptive sizing */}
      <ResponsiveContainer width="100%" height="100%">
        {/* LineChart: Main chart container */}
        <LineChart data={data} margin={{ top: 80, right: 0, left: 0, bottom: 20 }}>
          {/* Gradient under the curve */}
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>

          {/* X Axis : Display days of the week */}
          <XAxis
            dataKey="day"
            type="category"
            padding={{ left: 0, right: 0 }}
            tick={{ fill: "#FFF", fontSize: 12, opacity: "0.5", dy: 10 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Y Axis hidden but keeping fixed scale */}
          <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />

          {/* Tooltip with interactive effect */}
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor chartHeight={300} />} />

          {/* Background area gradient under the curve */}
          <Area type="monotone" dataKey="sessionLength" stroke="none" fill="url(#areaGradient)" fillOpacity={1} />

          {/* White session duration line */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFF"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#FFF",
              strokeWidth: 8,
              border: 5,
              stroke: "rgba(255, 255, 255, 0.4)",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

SessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default SessionsChart;

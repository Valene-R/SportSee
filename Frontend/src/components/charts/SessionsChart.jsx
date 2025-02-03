import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

/**
 * Custom Tooltip for displaying sessions duration
 * hide when hovering over "PRE" or "POST" fake points
 * @param {Object} props Tooltip properties
 * @param {boolean} props.active Whether the tooltip is active
 * @param {Array} props.payload Data associated with the hovered point
 * @returns {JSX.Element|null} Formatted tooltip or null if inactive
 */
const CustomTooltip = ({ active, payload }) => {
  if (
    active && // Tooltip should be active
    payload?.length && // Ensure there is at least one data point
    payload[0]?.payload?.day && // Check if 'day' exists in the data
    !["PRE", "POST"].includes(payload[0].payload.day) // Hide tooltip for PRE/POST points
  ) {
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
const CustomCursor = ({ points, chartWidth, chartHeight }) => {
  // Check if 'points' is defined and not empty before accessing its properties
  // The optional chaining (?.) prevents errors if 'points' is undefined or null
  if (!points?.length) return null;

  const { x } = points[0]; // X position of the hovered point

  return (
    <rect
      x={x || 0} // Adjust X position for centering the effect
      y={0} // Start at the top of the chart
      width={chartWidth - x} // Cover the right side dynamically
      height={chartHeight} // Use full chart height
      fill="rgba(0, 0, 0, 0.1)" // Transparent dark overlay effect
    />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.array,
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
};

/**
 * Add dummy points before and after the data to extend the curve
 * @param {Array} data Original session data
 * @returns {Array} Extended dataset with "PRE" and "POST" points
 */
const extendData = (data) => {
  if (data.length === 0) return data;

  // Add a starting fake point (PRE) and an ending fake point (POST)
  const firstPoint = { day: "PRE", sessionLength: data[0].sessionLength };
  const lastPoint = { day: "POST", sessionLength: data[data.length - 1].sessionLength };

  return [firstPoint, ...data, lastPoint];
};

/**
 * SessionsChart : LineChart component displaying average sessions duration
 * @param {Object} props Chart properties
 * @param {Array} props.data Formatted session data
 * @returns {JSX.Element} Rendered LineChart component
 */
const SessionsChart = ({ data }) => {
  const [activeTooltip, setActiveTooltip] = useState(false);
  const extendedData = extendData(data);

  return (
    <div className="relative h-[263px] w-full max-w-[258px] overflow-hidden rounded-lg bg-[#FF0000]">
      <h2 className="absolute z-10 ml-7 h-14 w-full max-w-[148px] pt-8 text-sm font-medium text-white opacity-[0.5]">Durée moyenne des sessions</h2>

      {/* Responsive container for adaptive sizing */}
      <ResponsiveContainer width="100%" height="100%">
        {/* LineChart: Main chart container */}
        <LineChart
          data={extendedData}
          margin={{ top: 80, right: 0, left: 0, bottom: 20 }}
          onMouseEnter={() => setActiveTooltip(true)} // Enable visibility of the line when hovering over the chart
          onMouseLeave={() => setActiveTooltip(false)} // Disable visibility of the line when leaving the chart
        >
          {/* Linear gradient applied to the session line */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="70%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>

          {/* X Axis : Display days of the week, hide PRE and POST */}
          <XAxis
            dataKey="day"
            type="category"
            tick={{ fill: "#FFF", fontSize: 12, opacity: "0.5", dy: 10 }}
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
            tickFormatter={(value) => (["PRE", "POST"].includes(value) ? "" : value)}
          />

          {/* Y Axis hidden but keeping fixed scale */}
          <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />

          {/* Tooltip with interactive effect */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={<CustomCursor chartWidth={300} chartHeight={300} />}
            onActiveChange={(e) => setActiveTooltip(!!e)} // Track tooltip visibility: !!e ensures that activeTooltip is always a boolean
          />

          {/* White session duration line with delete interactive dots for PRE and POST */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={false}
            activeDot={({ cx, cy, payload }) =>
              ["PRE", "POST"].includes(payload.day) ? null : <circle cx={cx} cy={cy} r={5} fill="#FFF" stroke="rgba(255, 255, 255, 0.4)" strokeWidth={8} />
            }
            strokeOpacity={activeTooltip ? 1 : 0.4} // Adjust opacity on hover
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

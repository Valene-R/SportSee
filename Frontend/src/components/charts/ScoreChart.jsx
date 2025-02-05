import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

/**
 * ScoreChart displaying user progress with a semi-circle RadialBarChart
 * @param {Object} props Component properties
 * @param {number} [props.score=0] The user's score (between 0 and 100). Default to 0 if not provided or invalid
 * @returns {JSX.Element} A RadialBarChart with the user's score
 */
const ScoreChart = ({ score = 0 }) => {
  // Ensure score is a valid number; fallback to 0 if not
  const validScore = typeof score === "number" && !isNaN(score) ? score : 0;

  // Define arc angles based on score percentage
  const startAngle = 90; // The arc starts from the top
  const endAngle = startAngle + (validScore / 100) * 360; // Convert score to degrees

  // Prepare data for the chart
  const data = [{ name: "Score", value: validScore, fill: "#FF0000" }];

  return (
    <div className="relative h-[263px] w-full max-w-[258px] rounded-lg bg-[#FBFBFB]">
      <h2 className="absolute left-4 top-4 text-sm font-medium text-[#20253A]">Score</h2>

      {/* Chart container */}
      <ResponsiveContainer width="100%" height="100%">
        {/* RadialBarChart container */}
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="100%"
          barSize={10}
          data={data}
          startAngle={startAngle}
          endAngle={endAngle}
          background={{ fill: "#FFF" }}
        >
          {/* Progress bar with rounded corners*/}
          <RadialBar dataKey="value" cornerRadius="50%" />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* White circle in center  */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="190" height="190" className="absolute">
          <circle cx="50%" cy="50%" r="80" fill="#FFF" />
        </svg>
      </div>

      {/* Centered score text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-2xl font-bold text-[#282D30]">{validScore}%</p>
        <p className="flex flex-col text-base font-medium text-[#74798C]">
          <span>de votre </span>
          <span>objectif</span>
        </p>
      </div>
    </div>
  );
};

ScoreChart.propTypes = {
  score: PropTypes.number,
};

export default ScoreChart;

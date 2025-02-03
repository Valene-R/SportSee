import UserPerformance from "../models/UserPerformance";

/**
 * Format a number to a localized string
 * @param {number|string} value The value to format
 * @param {string} [locale="en-US"] The locale to use for formatting (default: en-US)
 * @returns {string} The formatted value
 */
export const formatValue = (value, locale = "en-US") => {
  return typeof value === "number" ? value.toLocaleString(locale) : value;
};

/**
 * Extract and format the day from a date string ("YYYY-MM-DD")
 * Remove zeros (e.g., "01" -> 1)
 * @param {string} dateString The date string in "YYYY-MM-DD" format
 * @returns {number|null} The formatted day as a number, or null if invalid
 */
export const formatDay = (dateString) => {
  if (!dateString || typeof dateString !== "string") {
    console.error("Invalid dateString:", dateString);
    return null; // Return null instead of throwing an error
  }
  return parseInt(dateString.split("-").pop(), 10); // Extract and convert the day
};

/**
 * Format session data by mapping days to letters
 * @param {Array} sessions The raw session data from the API
 * @returns {Array} The formatted session data
 */
export const formatSessions = (sessions) => {
  const daysMap = ["L", "M", "M", "J", "V", "S", "D"];

  return sessions.map((session) => ({
    day: daysMap[session.day - 1], // Convert API day (1 => based day) to letter (0 => based array)
    sessionLength: session.sessionLength || 0, // Default to 0 if null
  }));
};

/**
 * Format performance data by mapping kind IDs to labels and ensuring valid values
 * @param {Object} kind The mapping of kind IDs to performance types
 * @param {Array} performanceData  The raw performance data array
 * @returns {Array} The formatted and sorted performance data
 */
export const formatPerformance = (kind, performanceData) => {
  // Define the order of performance kinds in French
  const orderedKinds = ["Intensité", "Vitesse", "Force", "Endurance", "Énergie", "Cardio"];

  const formattedData = performanceData.map((perf) => ({
    value: perf.value, // Extract the performance value
    kind: UserPerformance.kindTranslation[kind[perf.kind]] || kind[perf.kind], // French translation
  }));

  // Sort data according to the predefined order
  return formattedData.sort((a, b) => orderedKinds.indexOf(a.kind) - orderedKinds.indexOf(b.kind));
};

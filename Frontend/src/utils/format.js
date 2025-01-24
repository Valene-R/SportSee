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

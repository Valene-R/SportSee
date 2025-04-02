import { formatDay } from "../utils/format";

/**
 * Represent a user's daily activity data
 */
export default class UserActivity {
  /**
   * Create a UserActivity instance
   * @param {Object} data The raw data from the API
   * @param {number} data.userId The user's ID
   * @param {Array<Object>} data.sessions Array of session objects
   * @param {string} data.sessions[].day The date (formatted)
   * @param {number} data.sessions[].kilogram The user's weight
   * @param {number} data.sessions[].calories Calories burned
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = Array.isArray(data.sessions)
      ? data.sessions.map((session) => ({
          day: formatDay(session.day), // Convert date string to a numeric day
          kilogram: session.kilogram ?? 0, // Ensure a default value
          calories: session.calories ?? 0, // Ensure a default value
        }))
      : []; // Ensure `sessions` is always an array
  }
}

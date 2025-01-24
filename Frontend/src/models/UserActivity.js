import { formatDay } from "../utils/format";

/**
 * Represent a user's daily activity data
 */
export default class UserActivity {
  /**
   * Create a UserActivity instance
   * @param {Object} data The raw data from the API
   * @param {number} data.userId The user's ID
   * @param {Array} data.sessions The raw session data
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

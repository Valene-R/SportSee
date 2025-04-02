import { formatSessions } from "../utils/format";

/**
 * Represent user session data
 */
export default class UserSessions {
  /**
   * Create a UserSessions instance
   * @param {Object} data The user sessions data
   * @param {number} data.userId The user's ID
   * @param {Array<Object>} data.sessions Array of session entries
   * @param {number} data.sessions[].day Day of the week as a number (1 = M, 7 = D)
   * @param {number} data.sessions[].sessionLength Session duration in minutes
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = formatSessions(data.sessions);
  }

  /**
   * Get the formatted sessions with abbreviated day labels
   * @returns {Array<{day: string, sessionLength: number}>} Array of session objects:
   * - 'day': abbreviated day label (e.g. 'L', 'M', 'J')
   * - 'sessionLength': duration in minutes
   */
  getFormattedSessions() {
    return this.sessions;
  }
}

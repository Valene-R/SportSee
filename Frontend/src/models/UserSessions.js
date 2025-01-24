import { formatSessions } from "../utils/format";

/**
 * Represent user session data
 */
export default class UserSessions {
  /**
   * Create a UserSessions instance
   * @param {Object} data The user sessions data
   */
  constructor(data) {
    this.userId = data.userId;
    this.sessions = formatSessions(data.sessions);
  }

  /**
   * Get the formatted sessions
   * @returns {Array} The formatted session data with unique day id
   */
  getFormattedSessions() {
    return this.sessions;
  }
}

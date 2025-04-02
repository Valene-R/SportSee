/**
 * Represent a user's score
 */
export default class UserScore {
  /**
   * Create an instance of UserScore
   * @param {Object} data The user data object
   * @param {number} data.id The user's ID
   * @param {number} [data.todayScore] The user's score for the current day
   * @param {number} [data.score] The user's total score (used if todayScore is unavailable)
   */
  constructor(data) {
    this.id = data.id;
    this.score = data.todayScore ?? data.score ?? 0; // Use nullish coalescing to avoid null or undefined values

    // If the score is invalid, set it to 0
    if (isNaN(this.score)) {
      this.score = 0;
    }
  }

  /**
   * Get the user's score as a percentage
   * @returns {number} Score percentage (between 0 and 100)
   */
  get percentage() {
    return Math.round(this.score * 100); // Prevent errors with NaN
  }
}

/**
 * Represent a User with personal and health-related data
 */
export default class User {
  /**
   * Create a User instance
   * @param {Object} data The user data
   */
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.todayScore = data.todayScore || data.score; // Handle alternate key "score"
    this.keyData = data.keyData; // Include keyData for health metrics
  }

  /**
   * Get the full name of the user
   * @returns {string} The full name
   */
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

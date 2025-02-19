import { formatValue } from "../utils/format";

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
    this.keyData = data.keyData; // Include keyData for health metrics

    // Extract keyData (0 if undefined)
    this.calories = this.keyData.calorieCount || 0;
    this.proteins = this.keyData.proteinCount || 0;
    this.carbs = this.keyData.carbohydrateCount || 0;
    this.lipids = this.keyData.lipidCount || 0;
  }

  /**
   * Get the full name of the user
   * @returns {string} The full name
   */
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Method to format keyData with units
   * @returns {Object} Formatted key data
   */
  getFormattedKeyData() {
    return {
      calorieCount: `${formatValue(this.calories, "en-US")}kCal`,
      proteinCount: `${formatValue(this.proteins, "en-US")}g`,
      carbohydrateCount: `${formatValue(this.carbs, "en-US")}g`,
      lipidCount: `${formatValue(this.lipids, "en-US")}g`,
    };
  }
}

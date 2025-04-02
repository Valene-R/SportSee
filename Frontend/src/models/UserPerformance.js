import { formatPerformance } from "../utils/format";

/**
 * Represent a user's performance data, including various activity metrics
 */
export default class UserPerformance {
  /**
   * Create an instance of UserPerformance
   * @param {Object} data The raw performance data
   * @param {number} data.userId The ID of the user
   * @param {Object.<string, string>} data.kind The mapping of kind IDs to performance types
   * @param {Array<Object>} data.data The raw performance data array
   * @param {number} data.data[].value The metric value
   * @param {number} data.data[].kind The key referring to the 'data.kind' mapping
   */
  constructor(data) {
    this.userId = data.userId;
    this.performance = formatPerformance(data.kind, data.data);
  }

  /**
   * English → French mapping of performance type names
   * @static
   * @constant
   * @type {Object}
   */
  static kindTranslation = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  /**
   * Get formatted performance data for the RadarChart
   * @returns {Array<{kind: string, value: number}>} Array of formatted performance objects:
   * - 'kind': the translated performance type (e.g. 'Cardio')
   * - `value`: the matching metric value
   */
  getFormattedPerformance() {
    return this.performance;
  }
}

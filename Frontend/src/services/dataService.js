import { fetchUserMock } from "./mockApiService";
import { fetchUser } from "./apiService";

/**
 * Determine whether to use mock data or real API
 * @constant {boolean}
 */
const isMock = true; // Change to false to use real API

/**
 * Fetch user data based on the selected data source (mock or real API)
 * @param {number} userId The user ID to fetch
 * @returns {Promise<object>} A promise resolving to the user data
 */
export const fetchUserData = isMock ? fetchUserMock : fetchUser;

import { fetchUserMock, fetchUserActivityMock } from "./mockApiService";
import { fetchUser, fetchUserActivity } from "./apiService";

/**
 * Determine whether to use mock data or real API
 * @constant {boolean}
 */
const isMock = true; // Change to false to use real API

/**
 * Fetch user data based on the selected data source (mock or real API)
 * @param {number} userId The user ID to fetch
 * @returns {Promise<User>} A promise resolving tto an instance of `User`
 */
export const fetchUserData = isMock ? fetchUserMock : fetchUser;

/**
 * Fetch user activity data based on the selected data source (mock or real API)
 * @param {number} userId The user ID for whom to fetch activity data
 * @returns {Promise<UserActivity>} A promise resolving to an instance of `UserActivity` containing activity details
 */
export const fetchUserActivityData = isMock ? fetchUserActivityMock : fetchUserActivity;

import { fetchUserMock, fetchUserActivityMock, fetchUserSessionsMock, fetchUserPerformanceMock, fetchUserScoreMock } from "./mockApiService";
import { fetchUser, fetchUserActivity, fetchUserSessions, fetchUserPerformance, fetchUserScore } from "./apiService";

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

/**
 * Fetch user session data based on the selected data source (mock or real API)
 * @param {number} userId The user ID for whom to fetch session data
 * @returns {Promise<UserSessions>} A promise resolving to an instance of `UserSessions`
 */
export const fetchUserSessionsData = isMock ? fetchUserSessionsMock : fetchUserSessions;

/**
 * Fetch user performance data based on the selected data source (mock or real API)
 * @param {number} userId The user ID for whom to fetch performance data
 * @returns {Promise<UserPerformance>} A promise resolving to an instance of `UserPerformance`
 */
export const fetchUserPerformanceData = isMock ? fetchUserPerformanceMock : fetchUserPerformance;

/**
 * Fetch user score data based on the selected data source (mock or real API)
 * @param {number} userId The user ID for whom to fetch score data
 * @returns {Promise<UserScore>} A promise resolving to an instance of `UserScore`
 */
export const fetchUserScoreData = isMock ? fetchUserScoreMock : fetchUserScore;

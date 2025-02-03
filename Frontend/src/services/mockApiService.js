import { mockUsers } from "../mockData/mockUsers";
import User from "../models/User";
import UserActivity from "../models/UserActivity";
import { mockActivity } from "../mockData/mockActivity";
import { mockAverageSessions } from "../mockData/mockAverageSessions";
import UserSessions from "../models/UserSessions";
import UserPerformance from "../models/UserPerformance";
import { mockPerformance } from "../mockData/mockPerformance";

/**
 * Simulate a call to fetch a user
 * @param {number} userId The ID of the user
 * @returns {Promise<User>} A promise resolving to an instance of `User`
 * @throws {Error} Will throw an error if the user is not found
 */
export const fetchUserMock = async (userId) => {
  try {
    const user = mockUsers.find((user) => user.data.id === userId);
    if (!user) {
      throw new Error("User not found.");
    }
    return new User(user.data); // Transform data using the User model
  } catch (error) {
    throw new Error(`Mock error: ${error.message}`);
  }
};

/**
 * Simulate a call to fetch user activity data
 * @param {number} userId The user ID
 * @returns {Promise<UserActivity>} A promise resolving to an instance of `UserActivity`
 * @throws {Error} Will throw an error if the activity data is not found
 */
export const fetchUserActivityMock = async (userId) => {
  try {
    const userActivity = mockActivity.find((user) => user.data.userId === userId);
    if (!userActivity) {
      throw new Error(`User activity data not found for user ID: ${userId}`);
    }
    return new UserActivity(userActivity.data);
  } catch (error) {
    console.error(`Error fetching mock user activity: ${error.message}`);
    throw error;
  }
};

/**
 * Simulate a call to fetch user session data
 * @param {number} userId The user ID
 * @returns {Promise<UserSessions>} A formatted UserSessions instance
 * @throws Will throw an error if the session data is not found
 */
export const fetchUserSessionsMock = async (userId) => {
  try {
    const userSessions = mockAverageSessions.find((session) => session.data.userId === userId);
    if (!userSessions) {
      throw new Error(`User session data not found for user ID: ${userId}`);
    }
    return new UserSessions(userSessions.data);
  } catch (error) {
    console.error(`Error fetching mock user sessions: ${error.message}`);
    throw error;
  }
};

/**
 * Simulate a call to fetch user performance data
 * @param {number} userId The user ID
 * @returns {Promise<UserPerformance>} A promise resolving to an instance of `UserPerformance`
 * @throws {Error} Will throw an error if the performance data is not found
 */
export const fetchUserPerformanceMock = async (userId) => {
  try {
    const userPerformance = mockPerformance.find((perf) => perf.data.userId === userId);
    if (!userPerformance) {
      throw new Error(`User performance data not found for user ID: ${userId}`);
    }
    return new UserPerformance(userPerformance.data);
  } catch (error) {
    console.error(`Error fetching mock user performance: ${error.message}`);
    throw error;
  }
};

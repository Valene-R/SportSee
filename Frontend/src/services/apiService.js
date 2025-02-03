import axios from "axios";
import User from "../models/User";
import UserActivity from "../models/UserActivity";
import { BASE_URL } from "../config";
import UserSessions from "../models/UserSessions";
import UserPerformance from "../models/UserPerformance";

/**
 * Fetch user data from API
 * @param {number} userId The user ID
 * @returns {Promise<User>} Returns an instance of User
 * @throws {Error} Throws an error if the user is not found
 */
export const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    const user = new User(response.data.data); // Transform data using the User model
    return user;
  } catch (error) {
    throw new Error("User not found"); // Throw an error to propagate it
  }
};

/**
 * Fetch user activity data from API
 * @param {number} userId The user ID
 * @returns {Promise<UserActivity>} Returns an instance of UserActivity
 * @throws {Error} Throws an error if the user activity data is not found
 */
export const fetchUserActivity = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}/activity`);
    return new UserActivity(response.data.data); // Transform data using the UserActivity model
  } catch (error) {
    throw new Error("User activity data not found");
  }
};

/**
 * Fetch user session data from API
 * @param {number} userId The user ID
 * @returns {Promise<UserSessions>} Returns an instance of UserSessions
 * @throws {Error} Throws an error if the user session data is not found
 */
export const fetchUserSessions = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}/average-sessions`);
    return new UserSessions(response.data.data); // Transform data using the UserSessions model
  } catch (error) {
    throw new Error("User session data not found");
  }
};

/**
 * Fetch user performance data from the API
 * @param {number} userId The user ID
 * @returns {Promise<UserPerformance>} Returns an instance of UserPerformance
 * @throws {Error} Throws an error if the user performance data is not found
 */
export const fetchUserPerformance = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}/performance`);
    return new UserPerformance(response.data.data); // Transform data using the UserPerformance model
  } catch (error) {
    throw new Error("User performance data not found");
  }
};

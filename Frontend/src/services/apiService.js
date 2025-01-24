import axios from "axios";
import User from "../models/User";
import UserActivity from "../models/UserActivity";
import { BASE_URL } from "../config";

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

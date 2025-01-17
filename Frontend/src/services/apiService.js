import axios from "axios";
import User from "../models/User";
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

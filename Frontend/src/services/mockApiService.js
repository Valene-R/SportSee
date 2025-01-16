import { mockUsers } from "../mockData/mockUsers";
import User from "../models/User";

/**
 * Simulate a call to fetch a user
 * @param {number} userId The ID of the user
 * @returns {Promise<object>} Simulated user data
 * @throws Will throw an error if the user is not found
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

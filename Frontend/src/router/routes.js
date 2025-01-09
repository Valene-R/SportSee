/**
 * Define application route paths
 * @param {string} [userId=":userId"] The user ID to generate the dashboard route
 * @returns {string} The generated route path
 */
export const ROUTES = {
  dashboard: (userId = ":userId") => `/user/${userId}`,
};

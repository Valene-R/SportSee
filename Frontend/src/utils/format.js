/**
 * Format a number to a localized string
 * @param {number|string} value The value to format
 * @param {string} [locale="en-US"] The locale to use for formatting (default: en-US)
 * @returns {string} The formatted value
 */
export const formatValue = (value, locale = "en-US") => {
  return typeof value === "number" ? value.toLocaleString(locale) : value;
};

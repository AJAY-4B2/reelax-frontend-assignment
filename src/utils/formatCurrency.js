/**
 * Format a number as Indian Rupee string with 2 decimal places.
 * e.g. formatINR(16078.64) → "16,078.64"
 * @param {number} amount
 * @returns {string}
 */
export function formatINR(amount) {
  return amount.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Calculate 18% GST on a given amount.
 * @param {number} amount
 * @returns {number}
 */
export function calcGST(amount) {
  return amount * 0.18;
}

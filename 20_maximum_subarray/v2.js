const asserts = require("assert");

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    /*
     * Kadane's algorithm
     * Whenever an element is larger than it sum with the previous max
     * Replace the max with the current element
     * Example:
     * [-5, 1, 10, -100, 6, 7]
     *
     * 1. Contagious Element: [-5], Max: -5, Sum: -5
     * 2. Contagious Element: [-5, 1], Max: 1, Sum: 1
     * 3. Contagious Element: [10, 1], Max: 11, Sum: 11
     * 4. Contagious Element: [10, 1, -100], Max: 11, Sum: 11
     * 5. Contagious Element: [6], Max: 11, Sum: 6
     * 6. Contagious Element: [6, 7], Max: 13, Sum: 13
     */

    sum = Math.max((sum += nums[i]), nums[i]);
    max = Math.max(max, sum);
  }

  return max;
}

asserts(maxSubArray([-5, 1, 10, -100, 6, 7]), 13);
asserts(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
asserts(maxSubArray([5, 4, -1, 7, 8]), 23);

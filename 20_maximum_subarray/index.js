/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Whenever it hits sum of negative means that part can be discard entirely
  // And then start the count again

  if (nums.length === 1) {
    return nums[0];
  } 

  let max = Number.NEGATIVE_INFINITY;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    max = Math.max(sum, max);

    sum = sum > 0 ? sum : 0;
  }

  return max;
};

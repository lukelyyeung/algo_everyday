
// Prefix sum approach
// 1st iteration from 0 to nums.length - 1
// Create product of elements with index smaller than current index
// 2nd iteration from nums.length - 1 to 0
// Multiply with product of elements with index larger than current index
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answers = Array(nums.length).fill(1);

  let temp = 1;

  for (let i = 0; i < nums.length; i++) {
    answers[i] *= temp;
    temp *= nums[i];
  }

  temp = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answers[i] *= temp;
    temp *= nums[i];
  }

  return answers;
};

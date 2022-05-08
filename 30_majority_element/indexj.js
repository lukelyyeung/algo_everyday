/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const countMap = new Map();
  const requiredMajority = Math.floor(nums.length / 2);

  for (let i = 0; i <= nums.length; i++) {
    const num = nums[i];
    const newCount = (countMap.get(num) ?? 0) + 1;

    if (newCount > requiredMajority) {
      return num;
    }

    countMap.set(num, newCount);
  }
};

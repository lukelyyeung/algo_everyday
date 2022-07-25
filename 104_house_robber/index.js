const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  const cached = new Array(nums.length).fill(0);
  cached[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let last = cached[i - 1] ?? 0;
    let cur = (cached[i - 2] ?? 0) + nums[i];
    cached[i] = Math.max(last, cur);
  }

  return cached[cached.length - 1];
};

assert.equal(rob([1, 2, 3, 4]), 6);
assert.equal(rob([2, 7, 9, 3, 1]), 12);

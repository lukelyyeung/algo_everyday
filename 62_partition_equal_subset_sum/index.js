const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canPartition(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);

  if (sum % 2 !== 0) {
    return false;
  }

  return canMakeSum(nums, sum / 2);
}

// Solution copied from https://www.youtube.com/watch?v=IsvocB5BJhw&ab_channel=NeetCode
// Not sure why this is efficient, the time and space complexity is n + n -1 + n-2+...1, where n is length of nums
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function canMakeSum(nums, target) {
  let set = new Set([0]);

  for (let i = 0; i < nums.length; i++) {
    const newSet = new Set();

    for (const value of set) {
      newSet.add(value);
      newSet.add(value + nums[i]);
      if (value + nums[i] === target) {
        return true;
      }
    }

    set = newSet;
  }

  return set.has(target);
}

assert.equal(canPartition([1, 5, 11, 5]), true);
assert.equal(canPartition([1, 2, 3, 5]), false);
assert.equal(
  canPartition([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 97, 95,
  ]),
  true,
);

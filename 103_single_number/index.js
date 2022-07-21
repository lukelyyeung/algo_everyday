const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  // XOR twice will be original value
  // 10101 ^ 10111 -> 00010
  // 00010 ^ 10111 -> 10101
  return nums.reduce((result, cur) => result ^ cur, 0);
}

assert.equal(singleNumber([4, 1, 2, 3, 3, 2, 1]), 4);
assert.equal(singleNumber([3, 3, 2, 1, 1]), 2);

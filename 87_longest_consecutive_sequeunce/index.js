const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  let uniqueNums = [...new Set(nums.sort((a, b) => a - b))];
  let maxStreak = 0;

  let currentStreak = 0;
  for (let i = 0; i < uniqueNums.length; i++) {
    if (uniqueNums[i] - 1 !== uniqueNums[i - 1]) {
      currentStreak = 1;
    } else {
      currentStreak++;
    }

    maxStreak = Math.max(currentStreak, maxStreak);
  }

  return maxStreak;
}


assert.equal(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
assert.equal(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
assert.equal(longestConsecutive([1, 2, 0, 1]), 3);

const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let index = 0;

  while (index < nums.length) {
    const current = nums[index];

    if (current < (nums[index - 1] ?? Number.NEGATIVE_INFINITY)) {
      let indexToSwap = index - 1;
      let shouldSwap = false;

      while (!shouldSwap) {
        if (current <= (nums[indexToSwap - 1] ?? Number.NEGATIVE_INFINITY)) {
          indexToSwap--;
        } else {
          nums.splice(indexToSwap, 0, nums.splice(index, 1)[0]);
          shouldSwap = true;
        }
      }
    }

    index++;
  }

  return nums;
};

assert.deepStrictEqual(sortColors([2, 0, 2, 1, 1, 0]), [0, 0, 1, 1, 2, 2]);
assert.deepStrictEqual(sortColors([2, 0, 1]), [0, 1, 2]);

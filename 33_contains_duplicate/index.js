/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]]) {
      return true;
    }

    numMap[nums[i]] = true;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));

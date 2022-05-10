/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Sort the nums first

  // iterate through nums

  // if current num larger than target, do not calculate
  // else do twoSum(subArray, currentNum) where push the triplet to result
  // O(N ^ 2) solution

  // Possible to have O(N) ?
  const results = [];
  const usedTriplets = {};
  nums.sort((a, b) => a - b);

  function twoSum(nums, currentNumber) {
    const map = {};
    const target = 0 - currentNumber;
    nums.forEach((num) => {
      if (map[num]) {
        const triplet = [...map[num], num];
        const stringified = triplet.join(',');
        if (usedTriplets[stringified]) {
          return;
        }
        results.push([...map[num], num]);
        usedTriplets[stringified] = true;
      } else {
        map[target - num] = [currentNumber, num];
      }
    });
  }

  nums.forEach((num, index) => {
    if (num <= 0) {
      twoSum(nums.slice(index + 1, nums.length), num);
    }
  });

  return results;
};

// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  if (nums.length === 0) {
    return [];
  }

  let permutationCount = 1;
  for (let i = 1; i <= nums.length; i++) {
    permutationCount *= i;
  }

  let results = {
    cursor: 0,
    array: new Array(permutationCount),
  };
  const permutations = new Array(nums.length);
  explore(results, permutations, nums, 0);
  return results.array;
}

/**
 * @param {number[][]} results
 * @param {number[]} nums
 */
function explore(results, permutations, nums, startIndex) {
  for (let i = 0; i < nums.length; i++) {
    const newPermutations = Array.from(permutations);
    newPermutations[startIndex] = nums[i];

    if (nums.length === 1) {
      results.array[results.cursor] = newPermutations;
      results.cursor++;
      return;
    }

    explore(results, newPermutations, [...nums.slice(0, i), ...nums.slice(i + 1)], startIndex + 1);
  }
}


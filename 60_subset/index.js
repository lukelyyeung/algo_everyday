/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const results = [[]];

  function _recurse(nums, subsets) {
    nums.forEach((num, index) => {
      const newSubsets = [...subsets, num];
      results.push(newSubsets);
      _recurse(nums.slice(index + 1), newSubsets);
    });
  }

  _recurse(nums, []);
  return results;
}

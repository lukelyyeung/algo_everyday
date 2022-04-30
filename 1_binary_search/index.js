/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while(start <= end) {
    const center = Math.floor((start + end) / 2);

    const currentValue = nums[center];
    if (currentValue === target) {
      return center;
    }

    if (target > currentValue) {
      start = center + 1;
    } else {
      end = center - 1;
    }
  }

  return -1;
}
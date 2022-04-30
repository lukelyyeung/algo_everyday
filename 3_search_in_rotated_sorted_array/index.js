/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//

function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const center = Math.floor((start + end) / 2);
    const current = nums[center];

    // console.log({ start, end, center, current, target });
    if (current === target) {
      return center;
    }

    // rotated right
    // e.g. from mid to right is asc
    if (nums[start] > current) {
      if (nums[end] >= target && target > current) {
        // search right side
        start = center + 1;
      } else {
        end = center - 1;
      }
      // rotate left
      // e.g. From left to mid is asc
    } else {
      if (current > target && target >= nums[start]) {
        end = center - 1;
      } else {
        start = center + 1;
      }
    }
  }

  return -1;
}

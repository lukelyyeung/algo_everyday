/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  return [getLowerBoundTarget(nums, target), getUpperBoundTarget(nums, target)];
}

function getLowerBoundTarget(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const center = Math.floor((start + end) / 2);
    if (nums[center] === target) {
      if (nums[center - 1] !== target) {
        return center;
      }

      end = center - 1;
    } else if (nums[center] > target) {
      end = center - 1;
    } else {
      start = center + 1;
    }
  }

  return -1;
}

function getUpperBoundTarget(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    
    const center = Math.floor((start + end) / 2);
    if (nums[center] === target) {
      if (nums[center + 1] !== target) {
        return center;
      }

      start = center + 1;
    } else if (nums[center] > target) {
      end = center - 1;
    } else {
      start = center + 1;
    }
  }

  return -1;
}

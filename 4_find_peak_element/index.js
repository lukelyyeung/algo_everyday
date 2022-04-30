/**
 * @param {number[]} nums
 * @return {number}
 */
function findPeakElement(nums) {
  // Start from center;
  // Compare left, right
  // If larger than both
  // return as peak
  // If smaller than one or more
  // Repeat with the larger value with left, right

  let index = Math.floor((nums.length - 1) / 2);

  while (index >= 0 && index <= nums.length - 1) {
    const current = nums[index];

    if (
      current > (nums[index - 1] ?? Number.NEGATIVE_INFINITY) &&
      current > (nums[index + 1] ?? Number.NEGATIVE_INFINITY)
    ) {
      return index;
    }

    index =
      (nums[index - 1] ?? Number.NEGATIVE_INFINITY) > (nums[index + 1] ?? Number.NEGATIVE_INFINITY)
        ? index - 1
        : index + 1;
  }

  return -1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
 function findPeakElementV2(nums) {
  // Start from center;
  // Compare left, right
  // If next item smaller than the current, peak is at the left hand side
  // else, right side hand

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const center = Math.floor((left + right) / 2);

    if (nums[center] >= (nums[center + 1] || Number.NEGATIVE_INFINITY)) {
      right = center;
    } else {
      left = center + 1;
    }
  }
  
  return left;
}

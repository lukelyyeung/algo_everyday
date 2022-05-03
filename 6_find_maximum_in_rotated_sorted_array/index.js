/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
  // Set start and end index
  // Loop while start not larger than end
  // Check if the array is not rotated: left < center < right
  // if not rotated:
  //    return left
  // if rotated right
  // e.g. 6, 7, 8, 0, 1, 2, 3
  // check if left number is smaller
  // if yes, search left side
  // else return center
  // if rotated left
  // e.g. 1,2,3,4,5,0
  // Search right side

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const center = Math.floor((left + right) / 2);
    if (
      (typeof nums[right] === 'undefined' || nums[right] >= nums[center]) &&
      (typeof nums[left] === 'undefined' || nums[center] >= nums[left])
    ) {
      return nums[right];
    } else if (nums[left] > nums[center]) {
      // 8,1,2,3,4
      right = center - 1;
    } else {
      // 3,4,5,0,1,2
      // left = center + 1;

      if (typeof nums[center + 1] === 'undefined' || nums[center] > nums[center + 1]) {
        return nums[center];
      }

      left = center + 1;
    }
  }

  return nums[left];
}

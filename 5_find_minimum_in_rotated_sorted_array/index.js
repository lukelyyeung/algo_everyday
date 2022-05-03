/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
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
      return nums[left];
    } else if (nums[left] > nums[center]) {
      // 8,1,2,3,4
      if (nums[center] > nums[center - 1]) {
        right = center - 1;
      } else {
        return nums[center];
      }
    } else {
      // 2,3,4,5,0,1
      left = center + 1;
    }
  }

  return nums[left];
}

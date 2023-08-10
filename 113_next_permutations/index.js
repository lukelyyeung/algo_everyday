function nextPermutation(nums) {
  // find out the pair that nums[i] < nums[i+1] with largest i
  let firstSwapIndex;
  let secondSwapIndex;

  for (let i = nums.length -1; i >= 0; i--) {
    if (nums[i - 1] < nums[i]) {
      firstSwapIndex = i - 1;
      break;
    }
  }

  if (typeof firstSwapIndex === "undefined") {
    nums.reverse();
    return nums;
  }

  // find out the largest l value where nums[l] > nums[i]
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[firstSwapIndex]) {
      secondSwapIndex = i;
      break;
    }
  }

  // swap i and l
  [nums[firstSwapIndex], nums[secondSwapIndex]] = [nums[secondSwapIndex], nums[firstSwapIndex]];

  // Reverse all elements after i
  let swapA = firstSwapIndex + 1;
  let swapB = nums.length - 1;

  while (swapB > swapA) {
    [nums[swapB], nums[swapA]] = [nums[swapA], nums[swapB]];
    swapA++;
    swapB--;
  }

  return nums;
}

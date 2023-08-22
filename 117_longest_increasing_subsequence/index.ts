function lengthOfLIS(nums: number[]): number {
  // init dp array with nums.length
  // iterate over nums

  // compare with dp array of each previous index
  // set the maximum dp value to the current index

  const dpArray = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dpArray[i] = Math.max(dpArray[i], dpArray[j] + 1);
      }
    }
  }

  return Math.max(...dpArray);
}


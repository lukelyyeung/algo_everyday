function lengthOfLIS(nums: number[]): number {
  const bst: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = bst.length;
    const num = nums[i];

    while (left < right) {
      const center = Math.floor((left + right) / 2);

      if (num > bst[center]) {
        left = center + 1;
      } else {
        right = center;
      }
    }

    bst[Math.min(left, right)] = num;
  }

  return bst.length;
}

console.log(lengthOfLIS([1, 0, 2, 3, 2]));

function maxProduct(nums) {
  let result = Number.NEGATIVE_INFINITY;
  let min = 1;
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    // always use the latest largest product -> -ve * -ve, +ve * +ve, fallback to current num if not set
    let currentMax = Math.max(max * nums[i], min * nums[i], nums[i]);
    // keep tracking of the -ve value
    min = Math.min(max * nums[i], min * nums[i], nums[i]);
    max = currentMax;
    result = Math.max(result, max);
  }

  return result;
}

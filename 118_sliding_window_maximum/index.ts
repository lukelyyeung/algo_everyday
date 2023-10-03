function maxSlidingWindow(nums: number[], k: number): number[] {
  // number of window equals to length - k + 1
  // e.g. length = 2, k = 1 -> 2 windows
  // e.g. length = 1, k = 1 -> 1 window
  const results = new Array(nums.length - k + 1);
  
  // Decreasing monotonic stack to store index
  // Why index ? we need to shift the array when the number leave the window
  // 0-index is the largest element
  let stack: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (stack[0] <= i - k) {
      stack.shift();
    }

    const current = nums[i];

    // if the current element is larger than previous, safely remove them as we are no longer care
    if (current > nums[stack[0]]) {
      stack = [i];
    } else {
      // Seems using >= has better performance on leetcode
      // probably because of the test case contains duplicate number
      // and when in large k value, this will increase the array size
      // causing frequent array resizing which is O(n) in nature
      while (current >= nums[stack[stack.length - 1]]) {
        stack.pop();
      }
      stack.push(i);
    }

    // The first window forms when index = k - 1
    if (i - k + 1 >= 0) {
      results[i - k + 1] = nums[stack[0]];
    }
  }

  return results;
}
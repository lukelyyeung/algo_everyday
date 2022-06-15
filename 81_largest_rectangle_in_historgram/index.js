const assert = require('assert');

/**
 * @param {number[]} heights
 * @return {number}
 */
function largestRectangleArea(heights) {
  const stack = [];
  let max = 0;

  heights.forEach((height, index) => {
    while (heights[stack[stack.length - 1]] > height) {
      const topIndex = stack.pop();
      // LeftBoundary for 1st item in the heights should be -1;
      const leftBoundaryIndex = stack[stack.length - 1] ?? -1;

      // index - leftBoundaryIndex - 1 
      // as the leftBoundaryIndex is not inclusive which becoz the leftBoundary not necessarily equal to height[topIndex]
      max = Math.max(max, heights[topIndex] * (index - leftBoundaryIndex - 1));
    }

    stack.push(index);
  });

  while (stack.length) {
    const topIndex = stack.pop();
    const leftBoundaryIndex = stack[stack.length - 1] ?? -1;

    max = Math.max(max, heights[topIndex] * (heights.length - leftBoundaryIndex - 1));
  }

  return max;
}

assert.equal(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
assert.equal(largestRectangleArea([2, 4]), 4);
assert.equal(largestRectangleArea([2, 3, 5, 6, 3, 2]), 12);
assert.equal(largestRectangleArea([2, 1, 2]), 3);
assert.equal(largestRectangleArea([3, 2]), 4);
assert.equal(largestRectangleArea([999, 999, 999, 999]), 3996);
assert.equal(largestRectangleArea([1, 2, 1]), 3);
assert.equal(largestRectangleArea([1, 2, 2]), 4);
assert.equal(largestRectangleArea([4, 2]), 4);
assert.equal(largestRectangleArea([0, 9]), 9);
assert.equal(largestRectangleArea([1, 2, 3, 4, 5]), 9);
assert.equal(largestRectangleArea([4, 2, 0, 3, 2, 5]), 6);
assert.equal(largestRectangleArea([1, 1]), 2);

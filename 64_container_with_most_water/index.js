const assert = require('assert');

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let start = 0;
  let end = height.length - 1;
  let maximum = 0;

  while (start < end) {
    const size = Math.min(height[start], height[end]) * (end - start);

    maximum = Math.max(size, maximum);

    if (height[start] <= height[end]) {
      const nextTallerHeightStartIndex = height.findIndex((value, index) => value > height[start] && index > start);

      if (nextTallerHeightStartIndex === -1) {
        return maximum;
      }

      start = nextTallerHeightStartIndex;
    } else {
      let nextTallerHeightEndIndex;

      for (let i = end - 1; i > 0; i--) {
        if (height[i] > height[end]) {
          nextTallerHeightEndIndex = i;
          break;
        }
      }

      if (nextTallerHeightEndIndex === -1) {
        return maximum;
      }

      end = nextTallerHeightEndIndex;
    }
  }

  return maximum;
}

assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
assert.equal(maxArea([4, 4, 2, 11, 0, 11, 5, 11, 13, 8]), 55);

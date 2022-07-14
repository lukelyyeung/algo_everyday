const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  const maxPriorityQueue = new MaxPriorityQueue();

  nums.forEach((num) => maxPriorityQueue.enqueue(num));

  while (k > 0) {
    k -= 1;

    if (k === 0) {
      return maxPriorityQueue.front().element;
    }
    maxPriorityQueue.dequeue();
  }

  return;
}

assert.equal(findKthLargest([1, 2, 3, 4, 5, 6], 2), 5);
assert.equal(findKthLargest([0, 0, 0, 0, 2], 1), 2);
assert.equal(findKthLargest([3, 4, 5, 6, 6, 6], 3), 6);
assert.equal(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);

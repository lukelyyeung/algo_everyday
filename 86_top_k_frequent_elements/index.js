const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  const results = [];
  const numCountMap = nums.reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  const maxHeap = new MaxHeap((element) => element.count);

  Object.entries(numCountMap).forEach(([number, count]) => {
    maxHeap.enqueue({ count, number });
  });

  while (results.length < k) {
    const topElement = maxHeap.dequeue();
    results.push(+topElement.number);
  }

  return results;
}

class MaxHeap {
  elements = [];
  /**
   * @param  {Function} valueExtractor
   */
  constructor(valueExtractor) {
    this.valueExtractor = valueExtractor ?? ((element) => element);
  }

  enqueue(newElement) {
    this.elements.push(newElement);
    this.heapifyFromBottom();
  }

  dequeue() {
    const topElement = this.elements.shift();

    if (this.elements.length > 1) {
      this.elements.unshift(this.elements.pop());
      this.heapifyFromTop();
    }

    return topElement;
  }

  // Keep compare and shift of parent if current element larger than parent
  heapifyFromBottom() {
    let cursor = this.elements.length - 1;
    let parentIndex = Math.ceil(cursor / 2) - 1;

    while (this.extractValue(parentIndex) < this.extractValue(cursor)) {
      [this.elements[parentIndex], this.elements[cursor]] = [this.elements[cursor], this.elements[parentIndex]];
      cursor = parentIndex;
      parentIndex = Math.ceil(cursor / 2) - 1;
    }
  }

  // Keep compare with children and shift with largest one if the largest one larger than self
  heapifyFromTop() {
    let cursor = 0;

    let leftChildIndex = cursor * 2 + 1;
    let rightChildIndex = cursor * 2 + 2;

    while (
      this.extractValue(leftChildIndex) > this.extractValue(cursor) ||
      this.extractValue(rightChildIndex) > this.extractValue(cursor)
    ) {
      const leftValue = this.extractValue(leftChildIndex);
      const rightValue = this.extractValue(rightChildIndex);

      let childIndexToSwap =
        leftValue > rightValue || typeof rightValue === 'undefined' ? leftChildIndex : rightChildIndex;

      [this.elements[childIndexToSwap], this.elements[cursor]] = [
        this.elements[cursor],
        this.elements[childIndexToSwap],
      ];

      cursor = childIndexToSwap;
      leftChildIndex = cursor * 2 + 1;
      rightChildIndex = cursor * 2 + 2;
    }

    return;
  }

  extractValue(index) {
    const element = this.elements[index];

    if (!element) {
      return;
    }

    return this.valueExtractor(element);
  }
}

assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3], 2), [3, 1]);
assert.deepEqual(topKFrequent([1, 2, 3], 2), [1, 3]);
assert.deepEqual(topKFrequent([5, 3, 1, 1, 1, 3, 5, 73, 1], 3), [1, 5, 3]);

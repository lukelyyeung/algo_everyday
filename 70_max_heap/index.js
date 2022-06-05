const assert = require('assert');

class MaxHeap {
  constructor(valueExtractor) {
    this.valueExtractor = valueExtractor;
  }

  items = [];
  size = 0;

  insert(item) {
    this.items.push(item);
    this.size++;

    let i = this.items.length - 1;
    // left child index = currentIndex * 2 + 1
    // right child index = currentIndex * 2 + 2
    // parent index = (currentIndex + 1 / 2) - 1;
    let parentIndex = Math.floor((i + 1) / 2 - 1);

    while (i > 0 && i < this.size && this.valueExtractor(item) > this.valueExtractor(this.items[parentIndex])) {
      parentIndex = Math.floor((i + 1) / 2 - 1);

      [this.items[i], this.items[parentIndex]] = [this.items[parentIndex], this.items[i]];

      i = parentIndex;

      parentIndex = Math.floor((i + 1) / 2 - 1);
    }
  }

  extractMax() {
    if (this.size === 0) {
      return null;
    }

    [this.items[0], this.items[this.items.length - 1]] = [this.items[this.items.length - 1], this.items[0]];

    const max = this.items.pop();
    this.size--;

    let i = 0;
    let leftChildIndex = i * 2 + 1;
    let rightChildIndex = i * 2 + 2;

    while (
      i < this.size - 1 &&
      (this.valueExtractor(this.items[leftChildIndex]) > this.valueExtractor(this.items[i]) ||
        this.valueExtractor(this.items[rightChildIndex]) > this.valueExtractor(this.items[i]))
    ) {
      const leftChildValue = this.valueExtractor(this.items[leftChildIndex]) ?? Number.NEGATIVE_INFINITY;
      const rightChildValue = this.valueExtractor(this.items[rightChildIndex]) ?? Number.NEGATIVE_INFINITY;

      if (leftChildValue > rightChildValue) {
        [this.items[i], this.items[leftChildIndex]] = [this.items[leftChildIndex], this.items[i]];
        i = leftChildIndex;
      } else {
        [this.items[i], this.items[rightChildIndex]] = [this.items[rightChildIndex], this.items[i]];
        i = rightChildIndex;
      }

      leftChildIndex = i * 2 + 1;
      rightChildIndex = i * 2 + 2;
    }

    return max;
  }
}

const heap = new MaxHeap((node) => node);
heap.insert(10);
heap.insert(2);
heap.insert(3);
heap.insert(200);
heap.insert(201);
heap.insert(60);

assert.equal(heap.extractMax(), 201);
assert.equal(heap.extractMax(), 200);
assert.equal(heap.extractMax(), 60);
assert.equal(heap.extractMax(), 10);
assert.equal(heap.extractMax(), 3);

heap.insert(101);
heap.insert(102);
heap.insert(103);
assert.equal(heap.extractMax(), 103);
assert.equal(heap.extractMax(), 102);
assert.equal(heap.extractMax(), 101);
assert.equal(heap.extractMax(), 2);
assert.equal(heap.extractMax(), null);

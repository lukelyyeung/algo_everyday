const assert = require('assert');

/**
 * @param {number[]} heights
 * @return {number}
 */
function trap(heights) {
  const stack = new Stack();
  let current = 0;
  let sum = 0;

  while (heights.length > current) {
    while (stack.size > 0 && heights[current] > heights[stack.top()]) {
      const top = stack.pop();

      if (stack.size === 0) {
        break;
      }

      const nextTop = stack.top();

      boundedHeight = Math.min(heights[current] - heights[top], heights[nextTop] - heights[top]);
      sum += boundedHeight * (current - nextTop - 1);
    }

    stack.push(current);
    current++;
  }

  return sum;
}

class Stack {
  tail = null;
  size = 0;

  top() {
    return this.tail?.value;
  }

  push(num) {
    const node = new Node(num);

    if (this.tail) {
      this.tail.next = node;
    }
    node.previous = this.tail;
    this.tail = node;
    this.size++;
  }

  pop() {
    const node = this.tail;
    this.tail = this.tail.previous;

    if (this.tail) {
      this.tail.next = null;
    }

    this.size--;
    return node.value;
  }
}

class Node {
  previous = null;
  next = null;
  value = null;
  constructor(num) {
    this.value = num;
  }
}

assert.equal(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
assert.equal(trap([4, 2, 0, 3, 2, 5]), 9);
assert.equal(trap([9, 6, 8, 8, 5, 6, 3]), 3);

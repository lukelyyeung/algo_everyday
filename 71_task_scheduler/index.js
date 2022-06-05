const assert = require('assert');

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
function leastInterval(tasks, n) {
  if (n === 0) {
    return tasks.length;
  }

  const taskHeap = new MaxHeap((node) => (node ? node.count : null));

  const taskCountMap = tasks.reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});

  // Create heap of task, rating by count
  Object.entries(taskCountMap).forEach(([task, count]) => {
    taskHeap.insert({
      task,
      count,
    });
  });

  // Create cool down queue, 1 task 1 time unit
  const coolDownTaskQueues = new MyQueue();

  // Pre-fill with n + 1 task
  for (let i = 0; i < n; i++) {
    coolDownTaskQueues.push({ task: 'idle' });
  }

  let taskRemained = tasks.length;
  let totalTimeConsumed = 0;

  while (taskRemained) {
    const queueTask = taskHeap.extractMax();

    if (!queueTask) {
      coolDownTaskQueues.push({ task: 'idle' });
    } else {
      taskRemained--;
      queueTask.count = queueTask.count - 1;
      coolDownTaskQueues.push(queueTask);
    }

    const coolDownedTask = coolDownTaskQueues.pop();

    if (coolDownedTask.task !== 'idle' && coolDownedTask.count > 0) {
      taskHeap.insert(coolDownedTask);
    }

    totalTimeConsumed++;
  }

  return totalTimeConsumed;
}

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

class MyQueue {
  head = null;
  tail = null;

  push(value) {
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    this.head = this.head ?? this.tail;
  }

  pop() {
    const node = this.head;

    if (!node) {
      return null;
    }

    this.head = node.next;

    if (this.tail === node) {
      this.tail = null;
    }

    return node.value;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

assert.equal(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2), 8);
assert.equal(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0), 6);
assert.equal(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2), 16);

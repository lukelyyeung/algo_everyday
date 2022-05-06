class MyQueue {
  items = [];

  push(x) {
    this.items.push(x);
  }

  pop() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  empty() {
    return this.items.length === 0;
  }
}

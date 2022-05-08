class MinStack {
  items = [];
  min = null;

  push(x) {
    this.items.unshift(x);

    if (this.min === null || x < this.min) {
      this.min = x;
    }
  }

  pop() {
    const lastElement = this.items.shift();

    if (lastElement === this.min) {
      this.min = this.items.reduce((min, cur) => {
        return Math.min(min, cur);
      }, Number.POSITIVE_INFINITY);
    }

    return lastElement;
  }

  top() {
    return this.items[0];
  }

  getMin() {
    return this.min;
  }
}
